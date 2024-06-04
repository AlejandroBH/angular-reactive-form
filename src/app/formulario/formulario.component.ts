import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  get name(): FormControl {
    return this.formRegister.get('name') as FormControl;
  }

  get lastNames(): FormControl {
    return this.formRegister.get('lastNames') as FormControl;
  }

  get email(): FormControl {
    return this.formRegister.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.formRegister.get('password') as FormControl;
  }

  get rut(): FormControl {
    return this.formRegister.get('rut') as FormControl;
  }

  formRegister = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastNames: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    rut: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  userRegister() {
    console.log(this.formRegister.value);
  }
}
