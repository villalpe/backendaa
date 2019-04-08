import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

//Importar nuestro nuevo modulo
import { ModuloEmailModule } from './moduloemail/components/moduloemail.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ErrorComponent } from './components/error/error.component';
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ErrorComponent,
    ParquesComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeeperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    ModuloEmailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
