import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientModule } from '@angular/http';

//Importar nuestro nuevo modulo
import { AdminModuleComponent } from './admin/components/admin.module';

import { AdminAddComponent } from './components/add/add.component';
import { AdminListComponent } from './components/list/list.component';
import { AdminShowComponent } from './components/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAddComponent,
    AdminListComponent,
    AdminShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    AdminModuleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AdminModule { }