import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { DomainDetailsComponent } from './domain-details/domain-details.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SpecificationComponent } from './specification/specification.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { DomainComponent } from './domain/domain.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';
import { TaskComponent } from './task/task.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    DomainDetailsComponent,
    RoleDetailsComponent,
    TaskDetailsComponent,
    DomainComponent,
    HeaderComponent,
    HomeComponent,
    RoleComponent,
    SidenavComponent,
    SpecificationComponent,
    TaskComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,    
    RouterModule,    
    FontAwesomeModule,    
    AccordionModule,
    BreadcrumbModule,
    ButtonModule,
    CarouselModule,
    MenubarModule,    
    PanelModule,
    PanelMenuModule,
    TabMenuModule,
    TabViewModule,
    TableModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
