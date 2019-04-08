import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpModule } from '@angular/http';

//Importar nuestro nuevo modulo de rutas
import { AdminRoutingModule } from './admin-routing.module';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EditorModule,
    AdminRoutingModule,
    HttpModule
  ],
  providers: [],
  exports: [  
    MainComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    ErrorComponent
    ]
})
export class AdminModule { }