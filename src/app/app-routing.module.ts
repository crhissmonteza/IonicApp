import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Definición de las rutas de la aplicación
const routes: Routes = [
  {
    path: '', // Ruta inicial
    redirectTo: 'nueva-tarea', // Redirige automáticamente a la página "nueva-tarea"
    pathMatch: 'full', // Asegura que esta ruta coincida completamente (sin fragmentos adicionales)
  },
  {
    path: 'lista-tareas', // Ruta para la lista de tareas
    loadChildren: () =>
      import('./pages/lista-tareas/lista-tareas.module').then(
        (m) => m.ListaTareasPageModule
      ), // Carga bajo demanda el módulo de "lista-tareas"
  },
  {
    path: 'nueva-tarea', // Ruta para crear una nueva tarea
    loadChildren: () =>
      import('./pages/nueva-tarea/nueva-tarea.module').then(
        (m) => m.NuevaTareaPageModule
      ), // Carga bajo demanda el módulo de "nueva-tarea"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), // Configura el enrutador con la estrategia de precarga para mejorar el rendimiento
  ],
  exports: [RouterModule], // Exporta el módulo de enrutamiento para que esté disponible en toda la aplicación
})
export class AppRoutingModule {}
