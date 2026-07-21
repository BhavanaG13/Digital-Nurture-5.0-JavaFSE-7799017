import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Hardcoded for now, as per Hands-On 7 Step 75.
  isLoggedIn = true;
}
