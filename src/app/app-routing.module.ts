import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-tareas',
    loadChildren: () => import('./pages/lista-tareas/lista-tareas.module').then( m => m.ListaTareasPageModule)
  },
  {
    path: 'nueva-tarea',
    loadChildren: () => import('./pages/nueva-tarea/nueva-tarea.module').then( m => m.NuevaTareaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
