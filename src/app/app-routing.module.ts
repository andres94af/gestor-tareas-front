import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaService } from './tarea.service';
import { TareasComponent } from './tareas/tareas.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path : "", component : InicioComponent },
  { path : "tareas", component : TareasComponent, canActivate: [AuthGuard] },
  { path : "login", component : LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
