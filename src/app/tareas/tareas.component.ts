import { Component } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from '../model/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styles: [],
})
export class TareasComponent {
  tareas: Tarea[] = [];

  tarea: Tarea = new Tarea();

  constructor(private tareaService: TareaService) {
    this.tarea.nombre = '';
    this.tarea.completada = false;
    this.getAll();
  }

  getAll() {
    this.tareaService.getAll().subscribe((tareasObtenidas) => {
      console.log(tareasObtenidas);
      this.tareas = Object.values(tareasObtenidas);
    });
  }

  guardarTarea() {
    console.log(this.tarea.nombre + this.tarea.completada);
    if (this.tarea.nombre != '') {
      this.tareaService.create(this.tarea).subscribe({
        next: () => {
          window.location.reload();
        },
        error: () => {},
      });
    }
  }

  eliminarTarea(id:number){
    this.tareaService.delete(id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: () => {},
    });
  }
}
