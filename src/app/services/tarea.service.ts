import { Injectable } from '@angular/core';

export interface Tarea {  // Asegúrate de exportar la interfaz si la necesitas en otros archivos
  titulo: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea[] = [];

  constructor() {}

  obtenerTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(tarea: Tarea): void {
    this.tareas.push(tarea);
  }

  eliminarTarea(tarea: Tarea): void {
    this.tareas = this.tareas.filter(t => t !== tarea);
  }
}

