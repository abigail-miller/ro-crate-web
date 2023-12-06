import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as toolsData from '../service/tools.json';
import * as tutorialsData from '../service/tutorials.json';
import * as domainsData from '../service/domains.json';
import * as useCaseData from '../service/use-cases.json';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-domain-details',
  templateUrl: './domain-details.component.html'
})
export class DomainDetailsComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  domain = '';
  domainDetails: any;
  matchingUseCases: any = [];
  matchingTools: any = [];
  matchingTutorials: any = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.domain = params.get('category') || '';
    });
    const domains = (domainsData as any).default;
    this.domainDetails = domains.find((item: { Name: string; }) => item.Name === this.domain);
    const useCases = (useCaseData as any).default;
    for (let useCase of useCases)
    {
      if (useCase.Tags.includes(this.domain)) {
        this.matchingUseCases.push (useCase);
      }
    }
    const tools = (toolsData as any).default;
    for (let tool of tools)
    {
      if (tool.Tags.includes(this.domain)) {
        this.matchingTools.push (tool);
      }
    }
    const tutorials = (tutorialsData as any).default;
    for (let tutorial of tutorials)
    {
      if (tutorial.Tags.includes(this.domain)) {
        this.matchingTutorials.push (tutorial);
      }
    }
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Domains', routerLink: '/domain'},
      { label: 'Domain Details'},
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
