import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import * as useCaseData from '../service/use-cases.json';
import * as domainData from '../service/domains.json';
import * as taskData from '../service/tasks.json';
import * as roleData from '../service/roles.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  faFlask = faFlask;
  faPencil = faPencil;
  faUser = faUser;
  useCases: any[] = [];

  ngOnInit() {
    this.useCases = (useCaseData as any).default;
  }

  responsiveOptions: any[]  = [
    {
        breakpoint: '1350px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1050px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
  ];

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
