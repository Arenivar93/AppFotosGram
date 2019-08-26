import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements  CanLoad{

  constructor(private usuarioService: UsuarioService){}
  
  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    
    return this.usuarioService.validaToken();
    
  }


  /*canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return false;
  }*/


  
}
