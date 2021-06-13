import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SELECT_ITEM_HEIGHT_EM } from '@angular/material/select/select';
import { Compra } from 'src/app/compras/compra';
import { ComprasService } from 'src/app/compras/compras.service';
import { Conta } from '../conta';
import { ContasService } from '../contas.service';

@Component({
  selector: 'app-contas-read',
  templateUrl: './contas-read.component.html',
  styleUrls: ['./contas-read.component.css']
})
export class ContasReadComponent implements OnInit {

  public contas: Conta[] = [];
  public compras: Compra[] = [];
  public total: number = 0;
  public value: string = '';

  expandedIndex = 0;
  length = 0;
  size = 10;
  page = 0;
  pageSizeOptions: number[] = [10];

  constructor(
    private contasService: ContasService,
    private comprasService: ComprasService
  ) { }

  ngOnInit(): void {
    this.getContas();
    this.getCompras();
  }

  getContas(){
    this.contasService.read(this.size, this.page).subscribe({
      next: res  => {
        this.contas = res.contas;
        this.length = res.totalItems;
      },
      error: err => console.log(err)
    });
  }

  getCompras(){
    this.comprasService.read().subscribe({
      next: res => {
        this.compras = res;
      },
      error: err => console.log(err)
    })
  }

  onChangePage(event: PageEvent){
    this.size = event.pageSize;
    this.page = event.pageIndex;
    this.getContas();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  setTotal(conta_id: number) {
    let totalGeral = 0;
    for (let i = 0; i < this.compras.length; i++) {
      if (this.compras[i].contas_id == conta_id) {
        totalGeral += parseFloat(this.compras[i].valor);
      }
    }
    this.total = totalGeral;
  }

  changeAccordion(accordionItem: any){
    accordionItem.toggle()
  }

  payOffDebt(compra_id: number, conta_id: number){
    this.comprasService.delete(compra_id).subscribe({
      next: res => {
        const tr = document.getElementById(`tr_${compra_id}`)?.remove();
        this.compras = this.compras.filter((compra) => {
          return compra.compras_id != compra_id
        });
        this.setTotal(conta_id);
      },
      error: err => console.log(err)
    })
  }

  filterByName(event: string){
    if(event){
      this.contasService.filter(event).subscribe({
        next: res => {
          this.contas = res;
        },
        error: err => console.log(err)
      })
    } else {
      this.size = 10;
      this.page = 0;
      this.getContas();
    }
  }

  deleteConta(id: number){
    this.contasService.delete(id).subscribe({
      next: () => {
        this.size = 10;
        this.page = 0;
        this.getContas();
      },
      error: err => {
        console.log(err)
      }
    })

  }

  reloadContas(){
    this.size = 10;
    this.page = 0;
    this.getContas();
  }


}
