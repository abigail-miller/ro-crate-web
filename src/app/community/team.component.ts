import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-team',
  styleUrls: ['./community.component.scss'], 
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'},      
      { label: 'Community'}, 
      { label: 'Team', routerLink: 'team'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
