import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  items: MenuItem[] | undefined;
  
  ngOnInit() {
    this.items = [
      { label: 'Explore',
        items: [
          {label: 'By Domain', routerLink: 'domain'},
          {label: 'By Task', routerLink: 'task'},
          {label: 'By Role', routerLink: 'role'},
        ]}
    ];
  }
}
