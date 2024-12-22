import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para solicitudes HTTP
import { Observable } from 'rxjs'; // Manejo de respuestas asíncronas

// Define la interfaz Tarea
export interface Tarea {
  id?: string; // 'id' opcional para evitar errores al crear nuevas tareas
  titulo: string;
  descripcion: string;
  imagen: string; // Incluye el campo para la imagen
  ubicacion?: string; // Agrega esta línea (el signo ? indica que es opcional)
}

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private baseUrl = 'https://674ce27754e1fca9290dca72.mockapi.io/tasks'; // URL base de MockAPI

  constructor(private http: HttpClient) {} // Inyecta HttpClient en el constructor

  /**
   * Método para obtener las tareas desde MockAPI.
   * Retorna un Observable que puedes suscribir en el componente.
   */
  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.baseUrl);
  }

  /**
   * Método para agregar una nueva tarea a MockAPI.
   * @param tarea Objeto con los datos de la nueva tarea.
   */
  agregarTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.baseUrl, tarea);
  }

  /**
   * Método para eliminar una tarea de MockAPI.
   * @param tarea Objeto de la tarea a eliminar (debe incluir el 'id').
   * Retorna un Observable<void> para indicar que no se espera respuesta con datos.
   */
  eliminarTarea(tarea: Tarea): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${tarea.id}`);
  }
}


