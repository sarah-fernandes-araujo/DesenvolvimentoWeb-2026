import { Component } from '@angular/core';

@Component({
  selector: 'app-reenvio',
  templateUrl: './reenvio.html',
  styleUrl: './reenvio.css'
})
export class Reenvio {

  // =====================================================
  // MENSAGEM DE CONFIRMAÇÃO
  // Controla se a mensagem será exibida
  // =====================================================

  mensagemEnviada: boolean = false;


  // =====================================================
  // REENVIA A SENHA
  // Verifica se o campo de e-mail foi preenchido
  // =====================================================

  reenviarSenha(formulario: HTMLFormElement): void {

    // Verifica se o formulário é válido
    if (!formulario.checkValidity()) {

      // Mostra o aviso nativo do navegador
      formulario.reportValidity();

      return;
    }


    // Mostra a mensagem de confirmação
    this.mensagemEnviada = true;


    // Simulação do envio
    console.log('Solicitação de senha enviada');

  }

}