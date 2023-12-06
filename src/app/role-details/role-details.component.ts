import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as toolsData from '../service/tools.json';
import * as tutorialsData from '../service/tutorials.json';
import * as roleData from '../service/roles.json';
import * as useCaseData from '../service/use-cases.json';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html'
})
export class RoleDetailsComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  role = '';
  roleDetails: any;
  matchingUseCases: any = [];
  matchingTutorials: any = [];
  matchingTools: any = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.role = params.get('category') || '';
    });
    const roles = (roleData as any).default;
    this.roleDetails = roles.find((item: { Name: string; }) => item.Name === this.role);
    const useCases = (useCaseData as any).default;
    for (let useCase of useCases)
    {
      if (useCase.Tags.includes(this.role)) {
        this.matchingUseCases.push (useCase);
      }
    }
    const tools = (toolsData as any).default;
    for (let tool of tools)
    {
      if (tool.Tags.includes(this.role)) {
        this.matchingTools.push (tool);
      }
    }
    const tutorials = (tutorialsData as any).default;
    for (let tutorial of tutorials)
    {
      if (tutorial.Tags.includes(this.role)) {
        this.matchingTutorials.push (tutorial);
      }
    }
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Roles', routerLink: '/role'},
      { label: 'Role Details'},
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
