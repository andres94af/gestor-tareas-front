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
  tareaNueva: Tarea = new Tarea();
  titulo:string;
  btnAgregarEditar:string;

  constructor(private tareaService: TareaService) {
    this.titulo = 'Nueva tarea';
    this.btnAgregarEditar = 'Agregar tarea'
    this.tareaNueva.nombre = '';
    this.tareaNueva.completada = false;
    this.getAll();
  }

  getAll() {
    this.tareaService.getAll().subscribe((tareasObtenidas) => {
      this.tareas = Object.values(tareasObtenidas);
    });
  }

  guardarTarea() {
    if (this.tareaNueva.nombre != '') {
      this.tareaService.create(this.tareaNueva).subscribe({
        next: () => {
          window.location.reload();
        },
        error: () => {},
      });
    }
  }

  eliminarTarea(id:number){
    var confirmacion = confirm("¿Esta seguro de eliminar tarea con id: " + id + "?");
    if(confirmacion){
      this.tareaService.delete(id).subscribe({
        next: () => {
          window.location.reload();
        },
        error: () => {},
      });
    }
  }

  editar(tarea:Tarea){
    this.titulo = 'Editar tarea';
    this.btnAgregarEditar = 'Actualizar';
    this.tareaNueva = tarea;
  }

}
