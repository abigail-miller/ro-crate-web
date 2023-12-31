import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as domainData from '../service/domains.json';
import * as taskData from '../service/tasks.json';
import * as roleData from '../service/roles.json';
import * as useCasesData from '../service/use-cases.json';

@Component({
  selector: 'app-domain',
  templateUrl: './use-case.component.html'
})
export class UseCaseComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  useCases = (useCasesData as any).default;
  markdownContent ='';
  htmlContent = '';
  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Use Cases', routerLink: 'useCases'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.markdownContent = ''
  }

  getTagRoute(tag: string): string {
    const domains = (domainData as any).default;
    if (domains.find((item: { Name: string; }) => item.Name === tag)) {
      return '/domain-details';
    }
    const tasks = (taskData as any).default;
    if (tasks.find((item: { Name: string; }) => item.Name === tag)) {
      return '/task-details';
    }
    const roles = (roleData as any).default;
    if (roles.find((item: { Name: string; }) => item.Name === tag)) {
      return '/role-details';
    }
    return '/home';
  }
}