import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./catalogo/catalogo.component').then(
        (m) => m.CatalogoComponent
      ),
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () =>
      import('./preguntas-frecuentes/preguntas-frecuentes.component').then(
        (m) => m.PreguntasFrecuentesComponent
      ),
  },
  {
    path: '',
    redirectTo: 'catalogo',  // Ruta por defecto redirige al catálogo
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'catalogo',  // Cualquier ruta desconocida redirige al catálogo
  }
];