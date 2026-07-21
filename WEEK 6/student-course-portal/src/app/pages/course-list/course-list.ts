import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  courses: Course[] = [];
  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();

    // Step 71: read the search query param back on load.
    const existingSearch = this.route.snapshot.queryParamMap.get('search');
    if (existingSearch) {
      this.searchTerm = existingSearch;
      this.filterCourses();
    }
  }

  filterCourses(): void {
    this.courses = this.courseService.getCourses().filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.searchTerm) {
      this.router.navigate(['courses'], { queryParams: { search: this.searchTerm } });
    } else {
      this.router.navigate(['courses']);
    }
  }

  // Step 70: navigate to /courses/:id on card click.
  onCourseSelected(course: Course): void {
    this.router.navigate(['courses', course.id]);
  }
}
