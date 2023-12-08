import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as useCaseData from '../service/use-cases.json';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-use-case-details',
  templateUrl: './use-case-details.component.html'
})
export class UseCaseDetailsComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  useCase = '';
  useCaseDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.useCase = params.get('useCase') || '';
    });
    const useCases = (useCaseData as any).default;
    this.useCaseDetails = useCases.find((item: { Name: string; }) => item.Name === this.useCase);
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Use Cases', routerLink: '/use-cases'},
      { label: 'Use Case Details'},
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
