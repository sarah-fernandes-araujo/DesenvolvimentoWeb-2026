import { Component } from '@angular/core';

import { CommonModule, registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';

import { Router } from '@angular/router';

import { CestaService } from '../model/cesta.service';

registerLocaleData(localePt);

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedido.html',
  styleUrl: './pedido.css'
})
export class Pedido {

  formaPagamento: string = '';

  pedidoConfirmado: boolean = false;


  // =====================================================
  // CONFIRMA O PEDIDO
  // =====================================================

  confirmarPedido(): void {

    // Não confirma se nenhuma forma de pagamento
    // tiver sido escolhida.
    if (!this.formaPagamento) {
      return;
    }


    // Mostra a mensagem de pedido confirmado.
    this.pedidoConfirmado = true;


    // Aguarda 3 segundos para o cliente conseguir
    // ler a mensagem antes de ir para "Meus pedidos".
    setTimeout(() => {

      this.router.navigate(['/lista-pedidos']);

    }, 3000);

  }


  constructor(
    public cestaService: CestaService,
    private router: Router
  ) {}

}