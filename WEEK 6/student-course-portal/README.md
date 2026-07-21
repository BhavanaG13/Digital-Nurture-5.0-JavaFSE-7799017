# Student Course Portal — Hands-On 7: Routing, Guards, Lazy Loading & Route Data

## Setup

```bash
npm install
ng serve
```

Then open http://localhost:4200

If you don't have the Angular CLI installed globally, either install it (`npm install -g @angular/cli`) or run `npx ng serve` instead.

## What's implemented (mapped to the hands-on steps)

- **Step 68–69**: Routes for `/`, `/courses`, `/courses/:id`, `/profile`, wildcard `**` → `NotFound`. `CourseDetail` reads `:id` via `route.snapshot.paramMap` and loads the course from `CourseService`.
- **Step 70**: Clicking a course card in `CourseList` navigates to `/courses/:id`.
- **Step 71**: Typing in the search box updates the URL query param `?search=...` and it's read back on load via `queryParamMap`.
- **Step 72**: `/courses` uses a `CoursesLayout` component with its own `<router-outlet>` and nested children (`''` → `CourseList`, `:id` → `CourseDetail`).
- **Step 73–74**: `features/enrollment/` is a lazy-loaded `NgModule` (`loadChildren` in `app.routes.ts`). Check Chrome DevTools → Network tab and navigate to `/enroll` — you'll see a separate JS chunk load only then.
- **Step 75–76**: `authGuard` (functional `CanActivateFn`) checks `AuthService.isLoggedIn` (hardcoded `true`). Applied to `/profile` and `/enroll`.
- **Step 77**: `unsavedChangesGuard` (functional `CanDeactivateFn`) guards `/enroll/reactive` — if the reactive form is dirty, it shows a confirm dialog before letting you navigate away.

## Try it out

1. Go to **Courses**, use the search box — watch the URL update.
2. Click a course card — you land on its detail page.
3. Go to an unknown URL like `/nope` — you get the 404 page.
4. Open DevTools → Network, clear it, then click **Enroll** — a new chunk downloads only at that point.
5. Set `AuthService.isLoggedIn = false` in `src/app/services/auth.ts`, then try visiting `/profile` — you get redirected home.
6. Go to `/enroll/reactive`, type something in a field, then click **Courses** in the nav — you'll get the "unsaved changes" confirm dialog.

## Project structure

```
src/app/
  components/       header, course-card
  pages/            home, course-list, course-detail, student-profile, not-found, courses-layout
  features/
    enrollment/      lazy-loaded NgModule: enrollment-form (template-driven), reactive-enrollment-form
  guards/            auth.ts, unsaved-changes.ts
  services/          course.ts, auth.ts
  directives/        highlight.ts
  pipes/             credit-label-pipe.ts
```
