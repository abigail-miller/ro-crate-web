import { Component, OnInit } from '@angular/core';
import * as useCasesData from '../service/use-cases.json';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-domain',
  templateUrl: './use-case.component.html'
})
export class UseCaseComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  roles = (useCasesData as any).default;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Use Cases'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

}