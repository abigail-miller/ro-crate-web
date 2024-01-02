import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-background',
  styleUrls: ['./community.component.scss'], 
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'},      
      { label: 'Community'},
      { label: 'Contact', routerLink: 'contact'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
