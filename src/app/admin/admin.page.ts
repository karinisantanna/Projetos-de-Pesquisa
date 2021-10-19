import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  projeto: string;

  constructor(private service: SystemService, private router: Router) { }

  ngOnInit() {
    this.projeto = this.service.projeto;
  }

  logout() {
    this.service.logout();
  }

  trocaStatus(status) {
    this.service.projeto.status = status;
    this.service.trocaStatus(status);
  }

}
