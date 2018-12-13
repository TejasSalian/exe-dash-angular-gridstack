import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { JquerymodelComponent } from './jquerymodel/jquerymodel.component';
import { AnguwayComponent } from './anguway/anguway.component';

const routes: Routes = [
  { path: '', component: AnguwayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
