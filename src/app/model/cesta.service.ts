import { Injectable } from '@angular/core';

import { Cesta } from './cesta';
import { Produto } from './produto';
import { ItemCesta } from './item-cesta';

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  cesta: Cesta = new Cesta();

  urlRetorno: string = '/vitrine';

  // =====================================================
  // ADICIONA UM PRODUTO À CESTA
  // =====================================================

  adicionarProduto(produto: Produto): void {

    const itemExistente = this.cesta.itens.find(
      item => item.produto.codigo === produto.codigo
    );

    // Se o produto já estiver na cesta,
    // aumenta somente a quantidade
    if (itemExistente) {

      itemExistente.quantidade++;

      itemExistente.valorItem =
        itemExistente.produto.valorPromo * itemExistente.quantidade;

    }

    // Se ainda não estiver na cesta,
    // cria um novo item
    else {

      const novoItem = new ItemCesta();

      novoItem.produto = produto;
      novoItem.quantidade = 1;
      novoItem.valorItem = produto.valorPromo;

      this.cesta.itens.push(novoItem);

    }

    this.atualizarTotal();
  }


  // =====================================================
  // DIMINUI A QUANTIDADE DE UM PRODUTO
  // =====================================================

  diminuirQuantidade(codigo: number): void {

    const itemExistente = this.cesta.itens.find(
      item => item.produto.codigo === codigo
    );

    if (!itemExistente) {
      return;
    }

    if (itemExistente.quantidade > 1) {

      itemExistente.quantidade--;

      itemExistente.valorItem =
        itemExistente.produto.valorPromo * itemExistente.quantidade;

    }

    else {

      this.removerProduto(codigo);
      return;

    }

    this.atualizarTotal();
  }


  // =====================================================
  // REMOVE TODAS AS UNIDADES DE UM PRODUTO
  // =====================================================

  removerProduto(codigo: number): void {

    this.cesta.itens = this.cesta.itens.filter(
      item => item.produto.codigo !== codigo
    );

    this.atualizarTotal();
  }


  // =====================================================
  // CALCULA O TOTAL DA CESTA
  // =====================================================

  atualizarTotal(): void {

    this.cesta.valorTotal = this.cesta.itens.reduce(
      (total, item) => total + item.valorItem,
      0
    );

  }

}

