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
      alert('no estas registrado como cliente')
      this.router.navigate(['/']);
      return false
    }
  }
}
