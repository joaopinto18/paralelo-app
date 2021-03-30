import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AddUserCarModel } from '../models/add-user-car-model';
import { ModeloDatosUsuario } from '../models1/modelo-datos-usuario';

@Injectable({
  providedIn: 'root'
})
export class AddInfoUserServicesService {
  private usersCollection: AngularFirestoreCollection<ModeloDatosUsuario>;
  private carsCollection: AngularFirestoreCollection<AddUserCarModel>
  private UsersCarCollection: AngularFirestoreCollection;
  constructor(private Firestore:AngularFirestore, private router: Router) {
    this.usersCollection = this.Firestore.collection<ModeloDatosUsuario>("DATOS-USUARIOS");
    this.carsCollection = this.Firestore.collection<AddUserCarModel>("VEHICULOS-REGISTRADOS")
    this.UsersCarCollection= this.Firestore.collection('VEHICULOS-REGISTRADOS');
  }

  /**
   * FUNCION PARA MODIFICAR DATOS DE LA BD 
   */

  modificarInfoUsuario(data:ModeloDatosUsuario):any{

    //BUSCAR EL ID DEL USUARIO EN EL LOCAL STORAGE, DONDE ESTARÁ CARGADO EL USUARIO
    this.usersCollection.doc(localStorage.getItem('iduser')).ref.onSnapshot(function(result) {
      result.ref.update({cedula: data.cedula, fecha: data.fecha, lugar: data.lugar, 
      nombre_apellido: data.nombre_apellido, numero: data.numero });
      alert('Se han modificado sus datos personales')
  })
  }

  /**
   * FUNCIÓN PARA VERIFICAR SI UN VEHÍCULO ESTÁ REGISTRADO
   */

   async VerificarVehiculo(nroVehiculo: number): Promise<string>{

    let encontrado: string = "no encontrado";
    await this.Firestore.collection('VEHICULOS-REGISTRADOS').ref.where('IdDocDueno','==', localStorage.getItem('iduser')).
    get().then((querysnapshot)=>{ //este await hace que primero se tenga que resolver esta promesa antes de proseguir con el codigo
        querysnapshot.forEach((usuario)=>{
          if(usuario.get('nroVheiculo')==nroVehiculo){
            //verificamos que el doc de info de este vehiculo existe
            encontrado=usuario.id.valueOf().toString();
          }
        })
    })
    return encontrado
  }

  /**
   * AGREGAR/MODIFICAR VEHICULOS DE USUARIO
   */

  async AgregarVehiculoUsuario(data:AddUserCarModel): Promise<any>{
    let encontrado: boolean = false;
    //antes evaluamos si vehiculo 1 esta registrado
    await this.Firestore.collection('VEHICULOS-REGISTRADOS').ref.where('IdDocDueno','==', localStorage.getItem('iduser')).
    get().then((querysnapshot)=>{ //este await hace que primero se tenga que resolver esta promesa antes de proseguir con el codigo
        querysnapshot.forEach((usuario)=>{
          if(usuario.get('nroVheiculo')==data.nroVheiculo){
            //verificamos que el doc de info de este vehiculo ya existe, la modificamos
            alert('se ha registrado nueva información para esta plaza de vehículo')
            encontrado=true;
            this.ModificarVehiculoUsuario(usuario.id.valueOf(), data);
          }
        })
    })
    if(!encontrado){
      //si el vehiculo no fue encontrado, quiere decir que no ha sido registrado, por lo tanto, procedemos a registrarlo
      alert('su vehículo ha sido registrado')
      this.carsCollection.add(data);
    }  
  }

  ModificarVehiculoUsuario(valor: string, data: AddUserCarModel){
    this.UsersCarCollection.doc(valor).ref.onSnapshot(function(result) {
    result.ref.update({ anno: data.anno, fecha: data.fecha, modelo: data.modelo, placa: data.placa,
    serial_motor: data.serial_motor })});
  }
}

