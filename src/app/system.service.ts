import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export const administrador = 1;
export const pesquisador = 2;

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  logado: any;
  usuarios: any[];
  projeto: any;

  constructor(private router: Router) {
    this.usuarios = [
      { id: 1, usuario: 'fulano', senha: '1234', perfil: administrador },
      { id: 2, usuario: 'beltrano', senha: '4321', perfil: pesquisador }
    ];
  }

  login(usuario: string, senha: string) {
    for (let index = 0; index < this.usuarios.length; index++) {
      const user = this.usuarios[index];
      if ((user.usuario === usuario) && (user.senha === senha)) {
        this.logado = user;
        return;
      }
    }
    throw new Error("Usuário ou senha incorreta");
  }

  cadastrarProjeto(titulo, data, metodologia, resultados, conclusao, status) {
    if (!this.projeto) {
      this.projeto = {
        titulo: titulo,
        data: data,
        metodologia: metodologia,
        resultados: resultados,
        conclusao: conclusao,
        status: status
      }
    } else {
      this.projeto.titulo = titulo;
      this.projeto.data = data;
      this.projeto.metodologia = metodologia;
      this.projeto.resultados = resultados;
      this.projeto.conclusao = conclusao;
      this.projeto.status = status;
    }
  }

  logout() {
    this.router.navigate(['/home']);
  }

  trocaStatus(status) {
    this.projeto.status = status;
  }
}
