import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SecurityContext } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './community/contact.component';
import { DomainDetailsComponent } from './domain-details/domain-details.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { SidenavExploreComponent } from './sidenav-explore/sidenav-explore.component';
import { SidenavSpecComponent } from './sidenav-spec/sidenav-spec.component';
import { SpecificationComponent } from './specification/specification.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { DomainComponent } from './domain/domain.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OutreachComponent } from './community/outreach.component';
import { PublicationsComponent } from './community/publications.component';
import { RoleComponent } from './role/role.component';
import { TaskComponent } from './task/task.component';
import { TeamComponent } from './community/team.component';
import { UseCaseComponent } from './use-case/use-case.component';
import { UseCaseDetailsComponent } from './use-case-details/use-case-details.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';

import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { FieldsetModule } from 'primeng/fieldset';
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
    CommunityComponent,
    ContactComponent,
    DomainDetailsComponent,
    RoleDetailsComponent,
    TaskDetailsComponent,
    DomainComponent,
    HeaderComponent,
    HomeComponent,
    OutreachComponent,
    PublicationsComponent,
    RoleComponent,
    SidenavExploreComponent,
    SidenavSpecComponent,
    SpecificationComponent,
    TaskComponent,
    TeamComponent,
    UseCaseComponent,
    UseCaseDetailsComponent,
    FooterComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,    
    RouterModule,    
    FontAwesomeModule,    
    AccordionModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    FieldsetModule,
    MenubarModule,    
    PanelModule,
    PanelMenuModule,
    TabMenuModule,
    TabViewModule,
    TableModule,
    TagModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      loader: HttpClient 
    }),
    MarkdownModule.forChild()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
