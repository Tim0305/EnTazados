import { Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { AvisoDePrivacidadComponent } from './aviso-de-privacidad/aviso-de-privacidad.component';
import { TerminosYCondicionesComponent } from './terminos-ycondiciones/terminos-ycondiciones.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
   { path: 'catalogo', component: CatalogoComponent },
   { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
   { path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent },
   { path: 'terminos-ycondiciones', component: TerminosYCondicionesComponent },
   { path: 'pedidos', component: PedidosComponent },
   { path: 'contacto', component: ContactoComponent },
   { path: 'log-in', component: LogInComponent },
   { path: 'sign-up', component: SignUpComponent },
   { path: '', redirectTo: '/catalogo', pathMatch: 'full' }  // Redirige por defecto al catálogo
];