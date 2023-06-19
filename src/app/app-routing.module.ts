import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaService } from './tarea.service';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  { path : "tareas", component : TareasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
