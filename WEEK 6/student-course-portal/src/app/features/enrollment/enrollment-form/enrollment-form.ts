import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollment-form',
  standalone: false,
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {
  // Template-driven enrollment form, carried over from Hands-On 4.
  student = {
    name: '',
    email: '',
    course: ''
  };

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    console.log('Enrollment submitted:', this.student);
  }
}
