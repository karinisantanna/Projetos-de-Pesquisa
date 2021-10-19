import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-pesquisador',
  templateUrl: './pesquisador.page.html',
  styleUrls: ['./pesquisador.page.scss'],
})
export class PesquisadorPage implements OnInit {

  titulo: string;
  data: Date;
  metodologia: string;
  resultados: string;
  conclusao: string;
  error: string;
  status: string;
  cadastrado: boolean;

  constructor(private service: SystemService) { }

  ngOnInit() {
    if (!this.service.projeto) {
      this.titulo = '';
      this.data = new Date();
      this.metodologia = '';
      this.resultados = '';
      this.conclusao = '';
      this.error = '';
      this.status = 'criado';
      this.cadastrado = false;
    } else {
      this.titulo = this.service.projeto.titulo;
      this.data = this.service.projeto.data;
      this.metodologia = this.service.projeto.metodologia;
      this.resultados = this.service.projeto.resultados;
      this.conclusao = this.service.projeto.conclusao;
      this.status = this.service.projeto.status;
      this.cadastrado = true;
    }
  }

  validar() {
    if (this.titulo === '' ||
      this.metodologia === '' ||
      this.resultados === '' ||
      this.conclusao === '') {
      this.error = 'Por favor, preencha todos os campos.';
    } else {
      this.error = '';
      this.cadastrar();
      this.cadastrado = true;
    }
  }

  cadastrar() {
    this.service.cadastrarProjeto(
      this.titulo,
      this.data,
      this.metodologia,
      this.resultados,
      this.conclusao,
      this.status,
    );
  }

  logout() {
    this.service.logout();
  }

}
