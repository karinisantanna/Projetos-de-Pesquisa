import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { administrador, pesquisador, SystemService } from '../system.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;
  password: string;
  error: string;

  constructor(private service: SystemService, private router: Router) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.error = '';
  }

  ionViewWillEnter() {
    this.username = '';
    this.password = '';
    this.error = '';
  }

  validar() {
    if (this.username === '' || this.password === '') {
      this.error = 'Por favor, preencha todos os campos.';
    } else {
      this.error = '';
      this.login();
    }
  }

  login() {
    try {
      this.service.login(this.username, this.password);
      if (this.service.logado.perfil === administrador) {
        // carrega admin
        this.router.navigate(['/admin']);
      } else if (this.service.logado.perfil === pesquisador) {
        // carrega pesquisador
        this.router.navigate(['/pesquisador']);
      }
    } catch (err) {
      this.error = err;
    }
  }

}
