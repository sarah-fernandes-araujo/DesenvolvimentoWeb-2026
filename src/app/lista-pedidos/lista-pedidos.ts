import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { produtos } from '../model/produtos';

@Component({

  // Permite utilizar:
  // - o pipe "number" para formatar os valores
  // - o RouterLink para navegar até o pedido
  imports: [
    DecimalPipe,
    RouterLink
  ],

  selector: 'app-lista-pedidos',

  styleUrl: './lista-pedidos.css',

  templateUrl: './lista-pedidos.html',

})
export class ListaPedidos {

  // =====================================================
  // PEDIDO 0001
  // =====================================================

  pedido1 = {
    numero: '0001',
    data: '25/09/2026',
    status: 'Concluído',
    total: produtos[0].valor
  };


  // =====================================================
  // PEDIDO 0002
  // =====================================================

  pedido2 = {
    numero: '0002',
    data: '26/09/2026',
    status: 'Em andamento',
    total:
      produtos[0].valor +
      produtos[1].valor +
      produtos[2].valor
  };


  // =====================================================
  // PEDIDO 0003
  // =====================================================

  pedido3 = {
    numero: '0003',
    data: '27/09/2026',
    status: 'Cancelado',
    total: produtos[2].valor
  };

}