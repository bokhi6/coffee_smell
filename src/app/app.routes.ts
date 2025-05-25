import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
