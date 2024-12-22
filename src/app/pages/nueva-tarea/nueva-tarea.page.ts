// Importaciones necesarias para el componente
import { Component } from '@angular/core'; // Para definir un componente en Angular
import { TareaService, Tarea } from '../../services/tarea.service'; // Servicio y modelo de tareas
import { Camera, CameraResultType } from '@capacitor/camera'; // Plugin de Capacitor para usar la cámara
import { Geolocation } from '@capacitor/geolocation'; // Plugin de Capacitor para geolocalización

// Decorador del componente que define la configuración básica
@Component({
  selector: 'app-nueva-tarea', // Selector para el uso en plantillas HTML
  templateUrl: './nueva-tarea.page.html', // Ruta del archivo de plantilla HTML
  styleUrls: ['./nueva-tarea.page.scss'], // Ruta de los estilos CSS/SCSS
})
export class NuevaTareaPage {
  // Propiedad para manejar una nueva tarea
  nuevaTarea: Tarea = {
    titulo: '', // Inicializa el título vacío
    descripcion: '', // Inicializa la descripción vacía
    imagen: '', // Inicializa la imagen vacía
    ubicacion: '', // Inicializa la ubicación vacía
  };

  // Constructor para inyectar servicios u otras dependencias
  constructor(private tareaService: TareaService) {}

  /**
   * Método para agregar una nueva tarea.
   * Valida que los campos estén presentes antes de llamar al servicio.
   */
  agregarTarea() {
    if (this.nuevaTarea.titulo && this.nuevaTarea.descripcion) {
      this.tareaService.agregarTarea(this.nuevaTarea).subscribe(
        (respuesta) => {
          console.log('Tarea agregada exitosamente:', respuesta);
          // Reinicia la tarea después de agregar
          this.nuevaTarea = { titulo: '', descripcion: '', imagen: '', ubicacion: '' };
        },
        (error) => {
          console.error('Error al agregar tarea:', error);
        }
      );
    }
  }

  /**
   * Método para capturar una imagen utilizando la cámara del dispositivo.
   * Utiliza el plugin de Capacitor Camera.
   */
  async capturarImagen() {
    try {
      const image = await Camera.getPhoto({
        quality: 90, // Calidad de la imagen (0-100)
        allowEditing: false, // No permite editar la imagen después de capturarla
        resultType: CameraResultType.Uri, // Devuelve la URI de la imagen capturada
      });

      // Guarda la ruta de la imagen capturada en 'nuevaTarea.imagen'
      this.nuevaTarea.imagen = image.webPath || '';
    } catch (error) {
      console.error('Error al capturar la imagen:', error); // Maneja errores si los hay
    }
  }

  /**
   * Método para obtener la ubicación actual utilizando el plugin Geolocation.
   */
  async obtenerUbicacion() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const latitud = position.coords.latitude; // Obtiene la latitud
      const longitud = position.coords.longitude; // Obtiene la longitud

      // Guarda la ubicación como un string en 'nuevaTarea.ubicacion'
      this.nuevaTarea.ubicacion = `Lat: ${latitud}, Lng: ${longitud}`;
      console.log('Ubicación obtenida:', this.nuevaTarea.ubicacion);
    } catch (error) {
      console.error('Error al obtener la ubicación:', error); // Maneja errores si los hay
    }
  }
}


