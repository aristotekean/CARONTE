import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private afs: AngularFirestore ) {}

   // Crea un nuevo paciente
  public createUser(data: {
    id: string,
    url: string,
    InfoDesaparecido: {
      nombre: string,
      apellido: string,
      edad: string,
      direccion: string},
    InfoContacto: {
        nombre: string,
        apellido: string,
        ciudad: string,
        direccion: string,
        pais: string,
        telefono: string,
        provincia: string,
        email: string,
        codigozip: string},
  }) {
    return this.afs.collection('users').add(data);
  }

  // Obtiene un paciente
  public getUser(documentId: string) {
    return this.afs.collection('users').doc(documentId).snapshotChanges();
  }

  // Obtiene todos los pacientes
  public getUsers() {
   return this.afs.collection('users').snapshotChanges();
  }

  // Actualiza un paciente
  public updateUser(documentId: string, data: {
    nombre?: string,
    documento?: string,
    ciudad?: string,
    url?: string}) {
    return this.afs.collection('users').doc(documentId).set(data);
  }

  // Borrar un paciente
  public deleteUser(documentId: string) {
    return this.afs.collection('users').doc(documentId).delete();
  }

}
