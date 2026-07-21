import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile {
  studentName = 'Bhavz';
  program = 'JavaFSE - Digital Nurture 5.0';
}
