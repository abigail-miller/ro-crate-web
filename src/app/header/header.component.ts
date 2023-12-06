import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  
  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: 'home'}, 
      { label: 'Background', routerLink: 'background'}, 
      { label: 'Community', routerLink: 'community'},
      { label: 'Specification', routerLink: 'specification'},
      { label: 'Contact', routerLink: 'contact'} 
    ];
  }
}
