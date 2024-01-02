import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-publications',
  styleUrls: ['./community.component.scss'], 
  templateUrl: './publications.component.html'
})
export class PublicationsComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'},
      { label: 'Community'},
      { label: 'Publications', routerLink: 'publications'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
