import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { produtos } from '../model/produtos';

@Component({

  // =====================================================
  // CONFIGURAÇÃO DO COMPONENTE
  // =====================================================

  selector: 'app-detalhes-pedido',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './detalhes-pedido.html',

  styleUrl: './detalhes-pedido.css'

})
export class DetalhesPedido {


  // =====================================================
  // INFORMAÇÕES DO PEDIDO
  // =====================================================

  numeroPedido: string = '';

  dataPedido: string = '';

  statusPedido: string = '';

  mensagemPedido: string = '';

  produtosPedido: any[] = [];

  totalPedido: number = 0;


  // =====================================================
  // CONSTRUTOR
  // Pega o número do pedido que veio pela URL
  // =====================================================

  constructor(
    private route: ActivatedRoute
  ) {

    const numero = this.route.snapshot.paramMap.get('numero');

    this.carregarPedido(numero);

  }


  // =====================================================
  // CARREGA O PEDIDO
  // =====================================================

  carregarPedido(numero: string | null): void {


    // ===================================================
    // PEDIDO 0001
    // Pedido concluído e entregue
    // ===================================================

    if (numero === '0001') {

      this.numeroPedido = '0001';

      this.dataPedido = '25/09/2026';

      this.statusPedido = 'Concluído';

      this.mensagemPedido =
        'Compra finalizada e entregue!';

      this.produtosPedido = [
        produtos[0]
      ];

    }


    // ===================================================
    // PEDIDO 0002
    // Pedido realizado, mas ainda em andamento
    // ===================================================

    else if (numero === '0002') {

      this.numeroPedido = '0002';

      this.dataPedido = '26/09/2026';

      this.statusPedido = 'Em andamento';

      this.mensagemPedido =
        'Compra finalizada! Envio sendo preparado...';

      this.produtosPedido = [
        produtos[0],
        produtos[1],
        produtos[2]
      ];

    }


    // ===================================================
    // PEDIDO 0003
    // Pedido cancelado
    // ===================================================

    else if (numero === '0003') {

      this.numeroPedido = '0003';

      this.dataPedido = '27/09/2026';

      this.statusPedido = 'Cancelado';

      this.mensagemPedido =
        'Este pedido foi cancelado.';

      this.produtosPedido = [
        produtos[2]
      ];

    }


    // ===================================================
    // CALCULA O TOTAL DO PEDIDO
    // ===================================================

    this.totalPedido = this.produtosPedido.reduce(
      (total, produto) => total + produto.valorPromo,
      0
    );

  }

}