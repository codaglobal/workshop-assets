import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { AddEventComponent } from './components/add-event/add-event.component';


const routes: Routes = [
  {
    path: 'events',
    component: EventListComponent
  }, {
    path: 'add-events',
    component: AddEventComponent
  },
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
