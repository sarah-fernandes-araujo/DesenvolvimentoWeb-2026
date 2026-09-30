import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Produto } from '../model/produto';
import { produtos } from '../model/produtos';
import { CestaService } from '../model/cesta.service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {

  lista: Produto[] = [
    produtos[0],
    produtos[2],
    produtos[7],
    produtos[6],
    produtos[10],
    produtos[8],
    produtos[19],
    produtos[15],
    produtos[17],
    produtos[18]
  ];

  constructor(
    private cestaService: CestaService,
    private router: Router
  ) {}


  // =====================================================
  // FORMATA O PREÇO
  // =====================================================

  formatarPreco(valor: number): string {

    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  }


  // =====================================================
  // BOTÃO COMPRAR
  // =====================================================

  comprar(produto: Produto): void {

    // Guarda a página atual para o botão
    // "Continuar comprando" voltar para ela
    this.cestaService.urlRetorno = this.router.url;

    // Adiciona o produto à cesta
    this.cestaService.adicionarProduto(produto);

    // Vai direto para a cesta
    this.router.navigate(['/cesta']);

  }


  // =====================================================
  // BOTÃO PROMOÇÕES
  // =====================================================

  irParaInstrumentos(): void {

    const promocoes = document.getElementById('promocoes');

    if (promocoes) {

      promocoes.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  }


  // =====================================================
  // ABRE UMA CATEGORIA
  // =====================================================

  abrirCategoria(nome: string): void {

    this.router.navigate(['/categoria', nome]);

  }

}

