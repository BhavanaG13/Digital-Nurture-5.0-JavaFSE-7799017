import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';
import { NotFound } from './pages/not-found/not-found';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { authGuard } from './guards/auth';

export const routes: Routes = [
  { path: '', component: Home },

  // Step 72: nested routes under /courses via CoursesLayout + its own <router-outlet>.
  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetail }
    ]
  },

  // Step 76: guard the profile route.
  { path: 'profile', component: StudentProfile, canActivate: [authGuard] },

  // Step 73 & 76: lazy-loaded enrollment feature module, also guarded.
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadChildren: () => import('./features/enrollment/enrollment-module').then(m => m.EnrollmentModule)
  },

  // Wildcard must always be last.
  { path: '**', component: NotFound }
];
