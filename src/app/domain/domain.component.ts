import { Component, OnInit } from '@angular/core';
import * as domainsData from '../service/domains.json';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html'
})
export class DomainComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  domains = (domainsData as any).default;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Domain'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

}
