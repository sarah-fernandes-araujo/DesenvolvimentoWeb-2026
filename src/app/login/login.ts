import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({

  // Permite usar recursos do Angular no HTML,
  // como o *ngIf e o ngModel
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

  selector: 'app-login',

  styleUrl: './login.css',

  templateUrl: './login.html',

})
export class Login {

  // =====================================================
  // CAMPOS DO LOGIN
  // Guardam o e-mail e a senha digitados
  // =====================================================

  email: string = '';

  senha: string = '';


  // =====================================================
  // MENSAGEM DE ERRO
  // Controla se a mensagem será exibida
  // =====================================================

  mensagemErro: boolean = false;


  // =====================================================
  // REALIZA O LOGIN
  // Verifica os campos e simula o acesso à conta
  // =====================================================

  entrar(): void {

    // Verifica se o e-mail ou a senha estão vazios
    if (!this.email || !this.senha) {

      this.mensagemErro = true;

      return;

    }


    // Esconde a mensagem de erro
    this.mensagemErro = false;


    // =====================================================
    // LOGIN SIMULADO
    // Ainda não existe banco de dados ou autenticação.
    // Por isso, qualquer e-mail e senha preenchidos
    // são considerados válidos nesta etapa do projeto.
    // =====================================================

    console.log(
      'Login realizado:',
      this.email
    );


    // =====================================================
    // REDIRECIONA PARA A HOME
    // Depois do login, o usuário volta para a vitrine.
    // =====================================================

    this.router.navigate(['/vitrine']);

  }


  // =====================================================
  // CONSTRUTOR
  // Permite utilizar o Router para trocar de página
  // =====================================================

  constructor(
    private router: Router
  ) {}

}