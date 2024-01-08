import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import * as domainsData from '../service/domains.json';
import * as tasksData from '../service/tasks.json';
import * as rolesData from '../service/roles.json';
import * as toolsData from '../service/tools.json';
import * as tutorialsData from '../service/tutorials.json';
import * as useCasesData from '../service/use-cases.json';

@Component({
  selector: 'app-sidenav-explore',
  templateUrl: './sidenav-explore.component.html',
  styleUrls: ['./sidenav-explore.component.scss']
})
export class SidenavExploreComponent implements OnInit {
  items: MenuItem[] | undefined;
  domains = (domainsData as any).default;
  tasks = (tasksData as any).default;
  roles = (rolesData as any).default;
  tools = (toolsData as any).default;
  tutorials = (tutorialsData as any).default;
  useCases = (useCasesData as any).default;
  domainOpen = false;
  taskOpen = false;
  roleOpen = false;
  useCaseOpen = false;

  constructor(private router: Router) {
  }
  ngOnInit() {
    if (this.router.url.indexOf('domain-details') > -1) {
      this.domainOpen = true;
    }
    if (this.router.url.indexOf('task-details') > -1) {
      this.taskOpen = true;
    }
    if (this.router.url.indexOf('role-details') > -1) {
      this.roleOpen = true;
    }
    if (this.router.url.indexOf('use-case-details') > -1) {
      this.useCaseOpen = true;
    }
  }
}
