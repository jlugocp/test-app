import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeoplePageComponent } from './people-page/people-page.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { DetailComponent } from './detail/detail.component';
import { PeopleListComponent } from './people-list/people-list.component';


@NgModule({
  declarations: [
    PeoplePageComponent,
    PersonCardComponent,
    DetailComponent,
    PeopleListComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
