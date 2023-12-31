import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-background',
  templateUrl: './specification.component.html'
})
export class SpecificationComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Specification', routerLink: 'specification'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
