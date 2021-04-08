import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardMecanicoService implements CanActivate{

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(localStorage.getItem('accesouser')=='mecanico'){
      console.log(localStorage.getItem('accesouser'));
      return true
    }else{
      alert('No estás registrado como mecánico')
      if (localStorage.getItem('accesouser')=='cliente'){
        this.router.navigate(['/vista-datos-perfil-cliente']);
        return false
      }
      else if (localStorage.getItem('accesouser')=='admin'){
        this.router.navigate(['/vista-admin-roles']);
        return false
      }else if(localStorage.getItem('accesouser')=='gerente'){
        this.router.navigate(['/citas-gerente']);
        return false
      }
    }
  }
}
