import { Component, OnInit } from '@angular/core'; // Importa las dependencias necesarias
import { TareaService, Tarea } from '../../services/tarea.service'; // Importa el servicio de tareas y la interfaz Tarea

@Component({
  selector: 'app-lista-tareas', // Selector del componente
  templateUrl: './lista-tareas.page.html', // Archivo HTML del componente
  styleUrls: ['./lista-tareas.page.scss'], // Archivo de estilos
})
export class ListaTareasPage implements OnInit {
  tareas: Tarea[] = []; // Lista local para almacenar las tareas

  constructor(private tareaService: TareaService) {} // Inyección del servicio de tareas

  /**
   * Ciclo de vida de Angular: Se ejecuta al inicializar el componente.
   * Llama al método para cargar las tareas desde el servicio.
   */
  ngOnInit() {
    this.cargarTareas(); // Carga inicial de tareas
  }

  /**
   * Método para cargar las tareas desde el servicio.
   * Se suscribe al Observable devuelto por el servicio para obtener los datos.
   */
  cargarTareas() {
    this.tareaService.obtenerTareas().subscribe({
      next: (data) => {
        this.tareas = data; // Asigna las tareas recibidas a la lista local
      },
      error: (err) => {
        console.error('Error al cargar tareas:', err); // Manejo de errores
      },
    });
  }

  /**
   * Método para eliminar una tarea.
   * Se suscribe al Observable de eliminación y recarga las tareas después.
   * @param tarea La tarea que se desea eliminar
   */
  eliminarTarea(tarea: Tarea) {
    this.tareaService.eliminarTarea(tarea).subscribe({
      next: () => {
        console.log('Tarea eliminada:', tarea); // Mensaje de confirmación
        this.cargarTareas(); // Recarga la lista de tareas
      },
      error: (err) => {
        console.error('Error al eliminar tarea:', err); // Manejo de errores
      },
    });
  }
}



