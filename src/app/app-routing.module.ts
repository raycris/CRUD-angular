import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailComponent } from './components/tutorial-detail/tutorial-detail.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';

const routes: Routes = [
  {path: "", redirectTo: "tutorials", pathMatch: "full"},
  {path: "tutorials", component: TutorialListComponent},
  {path: "tutorials/:id", component: TutorialDetailComponent},
  {path: "add", component: AddTutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
