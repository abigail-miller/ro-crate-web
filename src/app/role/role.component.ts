import { Component, OnInit } from '@angular/core';
import * as rolesData from '../service/roles.json';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-domain',
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  roles = (rolesData as any).default;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Roles'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

}
