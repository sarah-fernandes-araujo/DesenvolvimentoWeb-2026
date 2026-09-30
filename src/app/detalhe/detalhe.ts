import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { produtos } from '../model/produtos';
import { Produto } from '../model/produto';
import { CestaService } from '../model/cesta.service';

@Component({
  imports: [CommonModule],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe {

  produto: Produto | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cestaService: CestaService
  ) {

    const codigo = Number(
      this.route.snapshot.paramMap.get('codigo')
    );

    this.produto = produtos.find(
      obj => obj.codigo === codigo
    );

  }


  comprar(): void {

    if (!this.produto) {
      return;
    }

    this.cestaService.urlRetorno = this.router.url;

    this.cestaService.adicionarProduto(this.produto);

    this.router.navigate(['/cesta']);

  }

}

