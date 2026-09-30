import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Produto } from '../model/produto';
import { produtos } from '../model/produtos';
import { CestaService } from '../model/cesta.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categoria.html',
  styleUrl: './categoria.css'
})
export class Categoria {

  // Nome da categoria que aparece no título
  nomeCategoria: string = '';

  // Produtos da categoria selecionada
  lista: Produto[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cestaService: CestaService
  ) {

    const nome = this.route.snapshot.paramMap.get('nome');

    this.selecionarCategoria(nome);
  }


  // =====================================================
  // SELECIONA OS PRODUTOS DE CADA CATEGORIA
  // =====================================================

  selecionarCategoria(nome: string | null): void {

    switch (nome) {

      // =========================
      // CORDAS
      // =========================

      case 'cordas':

        this.nomeCategoria = 'Cordas';

        this.lista = [
          produtos.find(obj => obj.codigo === 4)!,
          produtos.find(obj => obj.codigo === 5)!,
          produtos.find(obj => obj.codigo === 6)!,
          produtos.find(obj => obj.codigo === 27)!,
          produtos.find(obj => obj.codigo === 7)!,
          produtos.find(obj => obj.codigo === 26)!,
          produtos.find(obj => obj.codigo === 8)!,
          produtos.find(obj => obj.codigo === 25)!
        ];

        break;


      // =========================
      // TECLAS
      // =========================

      case 'teclas':

        this.nomeCategoria = 'Teclas';

        this.lista = [
          produtos.find(obj => obj.codigo === 28)!,
          produtos.find(obj => obj.codigo === 1)!,
          produtos.find(obj => obj.codigo === 29)!,
          produtos.find(obj => obj.codigo === 2)!,
          produtos.find(obj => obj.codigo === 31)!
        ];

        break;


      // =========================
      // SOPROS
      // =========================

      case 'sopros':

        this.nomeCategoria = 'Sopros';

        this.lista = [
          produtos.find(obj => obj.codigo === 9)!,
          produtos.find(obj => obj.codigo === 10)!,
          produtos.find(obj => obj.codigo === 11)!,
          produtos.find(obj => obj.codigo === 12)!,
          produtos.find(obj => obj.codigo === 13)!,
          produtos.find(obj => obj.codigo === 30)!,
          produtos.find(obj => obj.codigo === 14)!,
          produtos.find(obj => obj.codigo === 15)!,
          produtos.find(obj => obj.codigo === 16)!,
          produtos.find(obj => obj.codigo === 17)!
        ];

        break;


      // =========================
      // PERCUSSÃO
      // =========================

      case 'percussao':

        this.nomeCategoria = 'Percussão';

        this.lista = [
          produtos.find(obj => obj.codigo === 20)!,
          produtos.find(obj => obj.codigo === 33)!,
          produtos.find(obj => obj.codigo === 19)!,
          produtos.find(obj => obj.codigo === 34)!,
          produtos.find(obj => obj.codigo === 35)!,
          produtos.find(obj => obj.codigo === 18)!
        ];

        break;


      // =========================
      // HISTÓRICOS
      // =========================

      case 'historicos':

        this.nomeCategoria = 'Históricos';

        this.lista = [
          produtos.find(obj => obj.codigo === 3)!,
          produtos.find(obj => obj.codigo === 21)!,
          produtos.find(obj => obj.codigo === 22)!,
          produtos.find(obj => obj.codigo === 23)!,
          produtos.find(obj => obj.codigo === 24)!,
          produtos.find(obj => obj.codigo === 32)!
        ];

        break;


      // =========================
      // CATEGORIA INVÁLIDA
      // =========================

      default:

        this.nomeCategoria = 'Categoria';

        this.lista = [];

        break;
    }
  }


  // =====================================================
  // BOTÃO COMPRAR
  // =====================================================

  comprar(produto: Produto): void {

    // Guarda a categoria atual
    this.cestaService.urlRetorno = this.router.url;

    // Adiciona o produto à cesta
    this.cestaService.adicionarProduto(produto);

    // Vai para a cesta
    this.router.navigate(['/cesta']);
  }

}

