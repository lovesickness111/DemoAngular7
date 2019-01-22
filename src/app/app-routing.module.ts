import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { DemoJqueryComponent } from './components/demo-jquery/demo-jquery.component';

const routes: Routes = [
  { path: '', redirectTo: '/directive', pathMatch: 'full' },
  { path: 'directive', component: DemoDirectiveComponent },
  { path: 'jquery', component: DemoJqueryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
