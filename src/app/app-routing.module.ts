import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultComponent} from "./result-component/result.component";
import {MainComponent} from "./main-component/main.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'result/:id', component: ResultComponent }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
