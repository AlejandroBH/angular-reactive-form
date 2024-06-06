import { Component } from '@angular/core';
import { FormularioComponent } from '../components/formulario/formulario.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
