import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddComponent } from './components/add/add.component';
import { AdminListComponent } from './components/list/list.component';
import { AdminShowComponent } from './components/show/show.component';

const routes: Routes = [
{path: '', component: TiendaComponent},
	{path: '', component: HomeComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'add', component: AdminAddComponent},
	{path: 'list', component: AdminListComponent},
	{path: 'show', component: AdminShowComponent},
	{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }