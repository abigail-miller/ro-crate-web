import { Component, OnInit } from '@angular/core';
import * as tasksData from '../service/tasks.json';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-domain',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  tasks = (tasksData as any).default;

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Tasks', routerLink: 'tasks'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
