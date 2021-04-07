import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGerenteService {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(localStorage.getItem('accesouser')=='gerente'){
      console.log(localStorage.getItem('accesouser'));
      return true
    }else{
      alert('No estás registrado como gerente')
      if (localStorage.getItem('accesouser')=='cliente'){
        this.router.navigate(['/vista-datos-perfil-cliente']);
        return false
      }
      else if (localStorage.getItem('accesouser')=='mecanico'){
        this.router.navigate(['/vista-perfil-mecanico']);
        return false
      }
      else{
        this.router.navigate(['/vista-admin-roles']);
        return false
      }
    }
  }
}
