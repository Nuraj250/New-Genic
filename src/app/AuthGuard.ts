import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = JSON.parse(<string> localStorage.getItem('user')).data.token;
    if (token) {
      if (new JwtHelperService().isTokenExpired(token)) {
        this.router.navigate(['/login']);
        return false;
      } else if (state.url === '/login') {
        this.router.navigate(['/dashboard']);
        return false;
      } else {
        return true;
      }
    } else if (state.url === '/login') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
