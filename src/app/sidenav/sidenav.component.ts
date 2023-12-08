import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as domainsData from '../service/domains.json';
import * as tasksData from '../service/tasks.json';
import * as rolesData from '../service/roles.json';
import * as toolsData from '../service/tools.json';
import * as tutorialsData from '../service/tutorials.json';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  items: MenuItem[] | undefined;
  domains = (domainsData as any).default;
  tasks = (tasksData as any).default;
  roles = (rolesData as any).default;
  tools = (toolsData as any).default;
  tutorials = (tutorialsData as any).default;

  ngOnInit() {
   
  }
}
