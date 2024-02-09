import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum Paths {
  start = 'start',
  main = 'start',
}

const routes: Routes = [
  // { path: '', redirectTo: Paths.start, pathMatch: 'full' },
  // { path: Paths.start, component: StartPageComponent},
  // { path: Paths.main, component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
