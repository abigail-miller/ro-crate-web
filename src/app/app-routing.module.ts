import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { ContactComponent } from './community/contact.component';
import { DomainComponent } from './domain/domain.component';
import { DomainDetailsComponent } from './domain-details/domain-details.component';
import { HomeComponent } from './home/home.component';
import { OutreachComponent } from './community/outreach.component';
import { PublicationsComponent } from './community/publications.component';
import { RoleComponent } from './role/role.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { SpecificationComponent } from './specification/specification.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TeamComponent } from './community/team.component';
import { UseCaseComponent } from './use-case/use-case.component';
import { UseCaseDetailsComponent } from './use-case-details/use-case-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'domain', component: DomainComponent},
  { path: 'task', component: TaskComponent},
  { path: 'role', component: RoleComponent},
  { path: 'background', component: BackgroundComponent},
  { 
    path: 'community', 
    children: [
      { path: 'team', component: TeamComponent},
      { path: 'outreach', component: OutreachComponent},
      { path: 'publications', component: PublicationsComponent},
      { path: 'contact', component: ContactComponent}
    ]
  },
  { path: 'specification', component: SpecificationComponent},
  { path: 'domain-details', component: DomainDetailsComponent},
  { path: 'role-details', component: RoleDetailsComponent},
  { path: 'task-details', component: TaskDetailsComponent},
  { path: 'use-cases', component: UseCaseComponent},
  { path: 'use-case-details', component: UseCaseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
