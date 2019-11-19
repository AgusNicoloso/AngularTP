import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Url } from 'url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  checkLogin(url: string): boolean {
    if (this.auth.token) {
      return true;
    }
    // Store the attempted URL for redirecting
    this.auth.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigate(['/login']).then();
    return false;
  }
}