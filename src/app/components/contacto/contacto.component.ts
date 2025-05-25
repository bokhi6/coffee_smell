import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  onSubmit() {
    Swal.fire({
      title: '¡Mensaje Enviado!',
      text: 'Gracias por contactarnos. Te responderemos muy pronto.',
      icon: 'success',
      confirmButtonText: 'Perfecto',
      confirmButtonColor: '#7B4A2F',
      background: '#FFF9F2',
      color: '#3E2C1C',
      customClass: {
        popup: 'rounded-xl',
        confirmButton: 'rounded-lg font-semibold px-8 py-3'
      }
    });
  }
}
