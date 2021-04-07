import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioService } from '../services/servicio.service';

@Injectable({
  providedIn: 'root'
})
export class GuardClienteService implements CanActivate{

  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(localStorage.getItem('accesouser')=='cliente'){
      console.log(localStorage.getItem('accesouser'));
      return true
    }else{
      alert('No estás registrado como cliente')
      if (localStorage.getItem('accesouser')=='admin'){
        this.router.navigate(['/vista-admin-roles']);
        return false
      }
      else if (localStorage.getItem('accesouser')=='mecanico'){
        this.router.navigate(['/vista-perfil-mecanico']);
        return false
      }
      else{
        this.router.navigate(['/vista-citas']);
        return false
      }
    }
  }
}
