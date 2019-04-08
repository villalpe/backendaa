import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
//import { ErrorComponent } from './components/error/error.component';

const adminRoutes: Routes = [
	{	path: 'admin-panel', 
		component: MainComponent, 
		children: [
		/*{path: '', redirectTo: 'admin-panel', pathMatch: 'full'},*/
			{path: 'crear', component: AddComponent},
			{path: 'editar', component: EditComponent},
			{path: 'listar', component: ListComponent}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }