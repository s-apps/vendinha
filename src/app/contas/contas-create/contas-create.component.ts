import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContasService } from '../contas.service';

@Component({
  selector: 'app-contas-create',
  templateUrl: './contas-create.component.html',
  styleUrls: ['./contas-create.component.css']
})
export class ContasCreateComponent implements OnInit {

  formCliente = this.formBuilder.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    telefone: [''],
    data_nascimento: ['', Validators.required],
    idade: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private contasService: ContasService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.contasService.create(this.formCliente.value).subscribe({
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

}
