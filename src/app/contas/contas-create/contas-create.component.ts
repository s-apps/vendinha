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
  ) {}

  ngOnInit(): void {}

  onSubmit(){
    if (!this.validarCPF(this.formCliente.get('cpf')?.value)) {
      return;
    }
    this.dateFormat();
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

  validarCPF(cpf: string) {

    try {
     var Soma;
     var Resto;
     var strCPF = cpf.replace('-', '').replace('.', '').replace('.', '')
     Soma = 0;
     if (strCPF == '00000000000') return false;

     for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
     Resto = (Soma * 10) % 11;

     if ((Resto == 10) || (Resto == 11)) Resto = 0;
     if (Resto != parseInt(strCPF.substring(9, 10))) return false;

     Soma = 0;
     for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
     Resto = (Soma * 10) % 11;

     if ((Resto == 10) || (Resto == 11)) Resto = 0;
     if (Resto != parseInt(strCPF.substring(10, 11))) return false;

     return true;

    } catch (e) {

     return false;
    }
  }

  dateFormat() {
    const date = this.formCliente.get('data_nascimento')?.value;
    const dia = date.slice(0, 2);
    const mes = date.slice(2, 4);
    const ano = date.slice(4, 8);
    this.formCliente.patchValue({ data_nascimento: `${ano}-${mes}-${dia}` });
  }

  calculate_age(dob: Date) {
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  setAge(){
    const data_nascimento = this.formCliente.get('data_nascimento')?.value;
    const dia = data_nascimento.slice(0, 2);
    const mes = data_nascimento.slice(2, 4);
    const ano = data_nascimento.slice(4, 8);
    if (data_nascimento) this.formCliente.patchValue({ idade: this.calculate_age(new Date(ano, mes, dia)) });
  }

}
