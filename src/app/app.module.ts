import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareaService } from './tarea.service';

import  { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
