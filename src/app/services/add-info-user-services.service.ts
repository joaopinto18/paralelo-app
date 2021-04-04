import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AddUserCarModel } from '../models/add-user-car-model';
import { GestionCitasModel } from '../models/gestion-citas-model';
import { ModeloDatosUsuario } from '../models1/modelo-datos-usuario';

@Injectable({
  providedIn: 'root'
})
export class AddInfoUserServicesService {
  [x: string]: any;
  private usersCollection: AngularFirestoreCollection<ModeloDatosUsuario>;
  private carsCollection: AngularFirestoreCollection<AddUserCarModel>
  private UsersCarCollection: AngularFirestoreCollection;
  private citasCollection: AngularFirestoreCollection;
  
  public estadoRespuesta: string;
  constructor(private Firestore:AngularFirestore, private router: Router) {
    this.usersCollection = this.Firestore.collection<ModeloDatosUsuario>("DATOS-USUARIOS");
    this.carsCollection = this.Firestore.collection<AddUserCarModel>("VEHICULOS-REGISTRADOS")
    this.UsersCarCollection= this.Firestore.collection('VEHICULOS-REGISTRADOS');
    this.citasCollection= this.Firestore.collection('GESTION-CITAS');
  }
  
  /**
   * FUNCION PARA SOLICITAR UNA CITA
   */

  SolicitarCitax(data: GestionCitasModel): void{
    this.citasCollection.add(data);
  }

  /**
   * FUNCION PARA CANCELAR UNA ORDEN DE REPARACION
   */

  cancelarOrdenRepa(){

  }

  /**
   * FUNCION PARA OBTENER LA INFORMACIÓN DE VEHÍCULO
   */

   BuscarUsuario(correo: string): any{

    return this.Firestore.collection('DATOS-USUARIOS' ,  ref => (
      ref.where('correo', '==', correo)))
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
   * FUNCION PARA QUE EL ADMIN MODIFIQUE EL USUARIO
   */

  async modificarInfoUsuarioAdmin(data:any, correoUser:string):Promise<void>{

    //BUSCAR EL ID DEL USUARIO EN EL LOCAL STORAGE, DONDE ESTARÁ CARGADO EL USUARIO
    await this.Firestore.collection('DATOS-USUARIOS').ref.where('correo','==', correoUser).
    get().then((querysnapshot)=>{ //este await hace que primero se tenga que resolver esta promesa antes de proseguir con el codigo
    querysnapshot.forEach((usuario)=>{
        //si el documento se encuentra, entonces 
        console.log(usuario.id.valueOf().toString());
        this.usersCollection.doc(usuario.id.valueOf().toString()).ref.onSnapshot(function(result) {
        result.ref.update({ acceso: data.acceso, cedula: data.cedula, fecha: data.fecha, 
        lugar: data.lugar, nombre_apellido: data.nombre_apellido, numero:data.numero })});
      })
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
   * FUNCION PARA OBTENER LA FECHA DE UNA CITA
   */

  async fecha(nroVehiculo: number): Promise<string>{
    let fecha: 'sin asignar'
    await this.Firestore.collection('GESTION-CITAS').ref.where('CorreoSolicitante','==', localStorage.getItem('correouser')).
    get().then((querysnapshot)=>{ //este await hace que primero se tenga que resolver esta promesa antes de proseguir con el codigo
    querysnapshot.forEach((cita)=>{
        if(nroVehiculo==cita.get('nroVehiculo')){
          fecha = cita.get('fechaTentativa');
        }
      })
    })
    return fecha
  }

  /**
   * FUNCION PARA OBTENER EL ESTADO DE UNA CITA
   */

   async estadoCita(nroVehiculo: number): Promise<string>{
    let fecha: 'sin asignar'
    await this.Firestore.collection('GESTION-CITAS').ref.where('CorreoSolicitante','==', localStorage.getItem('correouser')).
    get().then((querysnapshot)=>{ //este await hace que primero se tenga que resolver esta promesa antes de proseguir con el codigo
    querysnapshot.forEach((cita)=>{
        if(nroVehiculo==cita.get('nroVehiculo')){
          fecha = cita.get('estatus');
        }
      })
    })
    return fecha
  }

  /**
   * SOLICITAR OTRA FECHA PARA LA CITA
   */

  async nuevaFecha(nrovehiculo: number): Promise<void>{
    await this.Firestore.collection('GESTION-CITAS').ref.where('CorreoSolicitante','==', localStorage.getItem('correouser')).
    get().then((querysnapshot)=>{ //este await hace que primero se tenga que resolver esta promesa antes de proseguir con el codigo
    querysnapshot.forEach((cita)=>{
        if(nrovehiculo==cita.get('nroVehiculo')){
          //si el documento se encuentra, entonces 
          this.citasCollection.doc(cita.id.valueOf().toString()).ref.onSnapshot(function(result) {
          result.ref.update({ estatus:'Cita solicitada', fechaTentativa:'En espera por fecha' })});
        }
      })
    })
  }

  /**
   * FUNCION PARA ELIMINAR DE CITAS
   */

  async eliminarCita(nrovehiculo: number): Promise<void>{
    
    await this.Firestore.collection('GESTION-CITAS').ref.where('CorreoSolicitante','==', localStorage.getItem('correouser')).
    get().then((querysnapshot)=>{ //este await hace que primero se tenga que resolver esta promesa antes de proseguir con el codigo
    querysnapshot.forEach((cita)=>{
        if(nrovehiculo==cita.get('nroVehiculo')){
          this.Firestore.collection('GESTION-CITAS').doc(cita.id.valueOf().toString()).delete()
        }
      })
    })
  }

  /**
   * FUNCION PARA CONFIRMAR CITA
   */

  async confirmar(nroVehiculo: number): Promise<void>{

    await this.Firestore.collection('GESTION-CITAS').ref.where('CorreoSolicitante','==', localStorage.getItem('correouser')).
    get().then((querysnapshot)=>{ //este await hace que primero se tenga que resolver esta promesa antes de proseguir con el codigo
    querysnapshot.forEach((cita)=>{
        if(nroVehiculo==cita.get('nroVehiculo')){
          //si el documento se encuentra, entonces 
          this.citasCollection.doc(cita.id.valueOf().toString()).ref.onSnapshot(function(result) {
          result.ref.update({ estatus:'confirmada' })});
        }
      })
    })
  }

  /**
   * FUNCION PARA COMPROBAR SI SE HA SOLICITADO CITA
   */

  async comprobarCita(nroVehiculo: number): Promise<boolean>{
    let encontrado: boolean = false;
    await this.Firestore.collection('GESTION-CITAS').ref.where('CorreoSolicitante','==', localStorage.getItem('correouser')).
    get().then((querysnapshot)=>{ //este await hace que primero se tenga que resolver esta promesa antes de proseguir con el codigo
    querysnapshot.forEach((cita)=>{
        console.log(cita.data());
        if(cita.get('nroVehiculo')==nroVehiculo){
          encontrado = true;
        }
      })
    })
    console.log(encontrado);
    return encontrado;
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

