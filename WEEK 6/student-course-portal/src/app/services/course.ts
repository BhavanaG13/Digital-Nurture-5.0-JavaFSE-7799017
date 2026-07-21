import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, name: 'Angular Fundamentals', instructor: 'Dr. Rao', credits: 4, description: 'Learn the core concepts of Angular including components, services and routing.' },
    { id: 2, name: 'Java Full Stack', instructor: 'Ms. Iyer', credits: 5, description: 'Spring Boot, REST APIs, and enterprise Java development.' },
    { id: 3, name: 'Database Systems', instructor: 'Mr. Verma', credits: 3, description: 'Relational databases, SQL, and normalization.' },
    { id: 4, name: 'Cloud Computing', instructor: 'Dr. Nair', credits: 3, description: 'Fundamentals of cloud platforms and deployment models.' }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }
}
