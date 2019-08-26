import { Component } from '@angular/core';
import { Usuario } from './../../interfaces/interfaces';
import { UsuarioService } from './../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario: Usuario = {};

  constructor( private usuarioService: UsuarioService,
               private uiService: UiServiceService) {}


  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    console.log(this.usuario);
  }
  
  async actualizar( fActualizar: NgForm) {
     if( fActualizar.invalid){ }

    const actualizado = await this.usuarioService.actualizarUsuario( this.usuario );

    console.log(actualizado);
    if (actualizado) {
      this.uiService.presentToast('Registro actualizado');
    }else{
      this.uiService.presentToast('No se pudo actualizar');
    }
  }

  logout(){

  }

}
