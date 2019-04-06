import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarComponent } from './star/star.component';
import { StarUpdateComponent } from './star-update/star-update.component';
import { StarListComponent } from './star-list/star-list.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'star-list' },
{ path: 'star/:id', component: StarComponent },
{ path: 'update-star', component: StarUpdateComponent },
{ path: 'star-list', component: StarListComponent }  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
