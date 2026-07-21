import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: false,
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm {
  enrollForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.enrollForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });
  }

  get f() {
    return this.enrollForm.controls;
  }

  onSubmit(): void {
    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    this.enrollForm.markAsPristine();
    console.log('Reactive enrollment submitted:', this.enrollForm.value);
  }
}
