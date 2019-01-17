import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';

const routes: Routes = [
  { path: '', redirectTo: '/directive', pathMatch: 'full' },
  { path: 'directive', component: DemoDirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
