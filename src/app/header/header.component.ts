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
      { label: 'Home', routerLink: '/home'}, 
      { label: 'Background', routerLink: '/background'},
      { label: 'Use Cases', routerLink: '/use-cases'}, 
      { label: 'Community',
        items: [
          { label: 'Team', routerLink: '/community/team'},
          { label: 'Outreach', routerLink: '/community/outreach'},
          { label: 'Publications', routerLink: '/community/publications'},
          { label: 'Contact', routerLink: '/community/contact'},
        ]
      },
      { label: 'Specification', routerLink: '/specification'}
    ];
  }
}
