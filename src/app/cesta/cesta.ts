import { Component } from '@angular/core';

import { CommonModule, registerLocaleData } from '@angular/common';

import { Router, RouterLink } from '@angular/router';

import localePt from '@angular/common/locales/pt';

import { CestaService } from '../model/cesta.service';

registerLocaleData(localePt);

@Component({

  selector: 'app-cesta',

  standalone: true,

  imports: [CommonModule, RouterLink],

  templateUrl: './cesta.html',

  styleUrl: './cesta.css'

})

export class Cesta {

  constructor(
    public cestaService: CestaService,
    private router: Router
  ) {}


  // =====================================================
  // CONTINUAR COMPRANDO
  // =====================================================

  continuarComprando(): void {

    this.router.navigateByUrl(
      this.cestaService.urlRetorno
    );

  }

}

