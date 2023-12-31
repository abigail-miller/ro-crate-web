import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-background',
  templateUrl: './community.component.html'
})
export class CommunityComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Community', routerLink: 'community'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
