import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Highlight } from '../../directives/highlight';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CreditLabelPipe, Highlight],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  @Input({ required: true }) course!: Course;
  @Output() cardClick = new EventEmitter<Course>();

  onClick(): void {
    this.cardClick.emit(this.course);
  }
}
