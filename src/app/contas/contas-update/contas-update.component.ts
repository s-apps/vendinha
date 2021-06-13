import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContasService } from '../contas.service';

@Component({
  selector: 'app-contas-update',
  templateUrl: './contas-update.component.html',
  styleUrls: ['./contas-update.component.css']
})
export class ContasUpdateComponent implements OnInit {

  public contaId!: number;


  formCliente = this.formBuilder.group({
    id: ['', Validators.required],
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    telefone: [''],
    data_nascimento: ['', Validators.required],
    idade: ['']
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private contasService: ContasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.contaId = params.id;
    });
    this.contasService.edit(this.contaId).subscribe({
      next: res => {
        this.formCliente.patchValue({
          id: res.id,
          nome: res.nome,
          cpf: res.cpf,
          telefone: res.telefone,
          data_nascimento: res.data_nascimento,
          idade: res.idade
        });
      },
      error: err => console.log(err)
    });
  }

  onSubmit(){
    this.contasService.update(this.formCliente.value).subscribe({
      next: res => {
        this.router.navigate(['']);
      },
      error: err => {
        console.log(err)
      }
    })
  }

  onCancel(event: Event){
    event.preventDefault();
    this.router.navigate(['']);
  }

}
