import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import {DonutListComponent} from "./admin/containers/donut-list/donut-list.component";
import {DonutSingleComponent} from "./admin/containers/donut-single/donut-single.component";

// path: '' is http://localhost:4200/
export const routes: Routes = [
  {
    path: 'admin',
    children: [
      { path: 'donuts', component: DonutListComponent },
      { path: 'donut', component: DonutSingleComponent },
      // redirects http://localhost:4200/admin to http://localhost:4200/admin/donuts
      // put always at the end
      { path: '', pathMatch: 'full', redirectTo: 'donuts' },
    ],
  },
  {
    // redirects http://localhost:4200/ to http://localhost:4200/admin
    // put always at the end
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
  {
    // Wild card selector redirects misspelled paths
    // eg. http://localhost:4200/addddminnnn to http://localhost:4200/admin
    path: '**',
    redirectTo: 'admin',
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), AdminModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
