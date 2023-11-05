import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { ActiveGroupComponent } from './active-group/active-group.component';
import { InactiveGroupComponent } from './inactive-group/inactive-group.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { ActiveStudentsComponent } from './active-students/active-students.component';
import { InactiveDetailsComponent } from './inactive-details/inactive-details.component';
import { DetailsStudentComponent } from './details-student/details-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: "admin", component: AdminComponent, children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'ins', component: InstructorsComponent },
      { path: 'active', component: ActiveGroupComponent },
      { path: 'Inactive', component: InactiveGroupComponent },
      { path: 'InactiveDetails/:id', component: InactiveDetailsComponent },
      { path: 'Waiting', component: WaitingListComponent },
      { path: 'actStudent', component: ActiveStudentsComponent },
      { path: 'Detalis/:id', component: DetailsStudentComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
