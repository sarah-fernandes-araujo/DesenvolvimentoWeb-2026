import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {

  cadastroEnviado = false;

  constructor(private router: Router) {}

  gravar(formulario: HTMLFormElement) {

    if (!formulario.checkValidity()) {
      formulario.classList.add('was-validated');
      formulario.reportValidity();
      return;
    }

    this.cadastroEnviado = true;

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}