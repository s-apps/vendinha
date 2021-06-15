import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conta } from 'src/app/contas/conta';
import { ContasService } from 'src/app/contas/contas.service';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-compras-create',
  templateUrl: './compras-create.component.html',
  styleUrls: ['./compras-create.component.css']
})
export class ComprasCreateComponent implements OnInit {

  public contas: Conta[] = [];

  formCompras = this.formBuilder.group({
    contas_id: ['', Validators.required],
    data: ['', Validators.required],
    descricao: ['', Validators.required],
    valor: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private comprasService: ComprasService,
    private contasService: ContasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getContas();
  }

  getContas(){
    this.contasService.readContas().subscribe({
      next: res  => {
        this.contas = res;
      },
      error: err => console.log(err)
    });
  }

  onSubmit(){
    this.formCompras.patchValue({ data: this.dateFormat(this.formCompras.get('data')?.value) });
    this.comprasService.create(this.formCompras.value).subscribe({
      next: res => {
        this.router.navigate([''])
      },
      error: err => console.log(err)
    });
  }

  onCancel(event: Event){
    event.preventDefault();
    this.router.navigate(['']);
  }

  setValue(event: Event) {
    this.formCompras.patchValue({ contas_id: event });
  }

  dateFormat(date: string) {
    const dia = date.slice(0, 2);
    const mes = date.slice(2, 4);
    const ano = date.slice(4, 8);
    return `${ano}-${mes}-${dia}`;
  }


}
