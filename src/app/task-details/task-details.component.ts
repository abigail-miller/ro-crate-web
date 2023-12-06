import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as toolsData from '../service/tools.json';
import * as tutorialsData from '../service/tutorials.json';
import * as tasksData from '../service/tasks.json';
import * as useCaseData from '../service/use-cases.json';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html'
})
export class TaskDetailsComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  task = '';
  taskDetails: any;
  matchingUseCases: any = [];
  matchingTools: any = [];
  matchingTutorials: any = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.task = params.get('category') || '';
    });
    const tasks = (tasksData as any).default;
    this.taskDetails = tasks.find((item: { Name: string; }) => item.Name === this.task);
    const useCases = (useCaseData as any).default;
    for (let useCase of useCases)
    {
      if (useCase.Tags.includes(this.task)) {
        this.matchingUseCases.push (useCase);
      }
    }
    const tools = (toolsData as any).default;
    for (let tool of tools)
    {
      if (tool.Tags.includes(this.task)) {
        this.matchingTools.push (tool);
      }
    }
    const tutorials = (tutorialsData as any).default;
    for (let tutorial of tutorials)
    {
      if (tutorial.Tags.includes(this.task)) {
        this.matchingTutorials.push (tutorial);
      }
    }
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/'}, 
      { label: 'Tasks', routerLink: '/task'},
      { label: 'Task Details'},
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
