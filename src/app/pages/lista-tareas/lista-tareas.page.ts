import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service'; // Importa el servicio desde la ubicación correcta

interface Tarea {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.page.html',
  styleUrls: ['./lista-tareas.page.scss'],
})
export class ListaTareasPage implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit() {
    this.tareas = this.tareaService.obtenerTareas();
  }

  eliminarTarea(tarea: Tarea) {
    this.tareaService.eliminarTarea(tarea);
    this.tareas = this.tareaService.obtenerTareas(); // Actualiza la lista
  }
}


