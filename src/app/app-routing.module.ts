import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DomainComponent } from './domain/domain.component';
import { TaskComponent } from './task/task.component';
import { RoleComponent } from './role/role.component';
import { DomainDetailsComponent } from './domain-details/domain-details.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { BackgroundComponent } from './background/background.component';
import { CommunityComponent } from './community/community.component';
import { SpecificationComponent } from './specification/specification.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'domain', component: DomainComponent},
  { path: 'task', component: TaskComponent},
  { path: 'role', component: RoleComponent},
  { path: 'background', component: BackgroundComponent},
  { path: 'community', component: CommunityComponent},
  { path: 'specification', component: SpecificationComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'domain-details', component: DomainDetailsComponent},
  { path: 'role-details', component: RoleDetailsComponent},
  { path: 'task-details', component: TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
