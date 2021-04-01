import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

@Component({
  selector: 'app-search-bar-user',
  templateUrl: './search-bar-user.component.html',
  styleUrls: ['./search-bar-user.component.scss']
})
export class SearchBarUserComponent implements OnInit {

  public form!:FormGroup;

  constructor(private userService: AddInfoUserServicesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createInputForm1();
    this.userService.estadoRespuesta='no se ha realizado búsqueda';
  }

  createInputForm1(): void{
    this.form=this.fb.group({
      correo:''
    });
  }

  async search():Promise<void>{
    const newCar: any={
      placa:this.form.get('correo')?.value
    }
    const usuario = await this.userService.BuscarUsuario(newCar.placa).valueChanges().pipe(take(1)).toPromise();
    if(usuario[0]!=null){
      this.userService.estadoRespuesta=usuario[0].correo;
      console.log('se encontro el usuario');
      alert('usuario encontrado')
    }else{
      this.userService.estadoRespuesta='sin resultados';
      console.log('no se encontro el usuario');
      alert('no se encontro el usuario')
    }
  }
}
