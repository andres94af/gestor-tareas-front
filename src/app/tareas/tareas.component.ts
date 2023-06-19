import { Component } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from '../model/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styles: [
  ]
})
export class TareasComponent {

  tareas:Tarea[] = [];

  constructor(private tareaService:TareaService){
    this.tareaService.getAll().subscribe(
      tareasObtenidas => {
        console.log(tareasObtenidas);
        this.tareas = Object.values(tareasObtenidas);
      }
    )
  }

}
