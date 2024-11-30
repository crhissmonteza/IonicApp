import { Component } from '@angular/core';
import { TareaService } from '../../services/tarea.service';


@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.page.html',
  styleUrls: ['./nueva-tarea.page.scss'],
})
export class NuevaTareaPage {
  titulo: string = '';
  descripcion: string = '';


  constructor(private tareaService: TareaService) {}

  agregarTarea() {
    if (this.titulo && this.descripcion) {
      this.tareaService.agregarTarea({
        titulo: this.titulo,
        descripcion: this.descripcion
      });
      // Limpiar los campos después de agregar
      this.titulo = '';
      this.descripcion = '';
    }
  }
}

