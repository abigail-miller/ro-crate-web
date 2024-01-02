import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-outreach',
  styleUrls: ['./community.component.scss'], 
  templateUrl: './outreach.component.html'
})
export class OutreachComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'},      
      { label: 'Community'},
      { label: 'Outreach', routerLink: 'outreach'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
