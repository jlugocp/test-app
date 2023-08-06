import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { PeopleModule } from './people/people.module';

const routes: Routes = [
  { path: '', loadChildren: () => PeopleModule },
  { path: 'blank', component: BlankComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
