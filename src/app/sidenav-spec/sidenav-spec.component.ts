import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-spec',
  templateUrl: './sidenav-spec.component.html',
  styleUrls: ['./sidenav-spec.component.scss']
})
export class SidenavSpecComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {
  }
  ngOnInit() {

  }
}
