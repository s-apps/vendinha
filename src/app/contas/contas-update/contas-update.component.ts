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
          data_nascimento: this.format(res.data_nascimento),
          idade: res.idade
        });
      },
      error: err => console.log(err)
    });
    this.formCliente.get('cpf')?.valueChanges.subscribe((cpf) => {
      if (!this.validarCPF(cpf)) {
        this.formCliente.invalid;
      }
    });
  }

  onSubmit(){
    if (!this.validarCPF(this.formCliente.get('cpf')?.value)) {
      return;
    }
    this.dateFormat();
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

  format(date: string) {
    const ano = date.slice(0, 4);
    const mes = date.slice(5, 7);
    const dia = date.slice(8, 10)
    return `${dia}${mes}${ano}`;
  }

  calculate_age(dob: Date) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
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
