import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html'
})
export class BackgroundComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Background', routerLink: 'background'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
