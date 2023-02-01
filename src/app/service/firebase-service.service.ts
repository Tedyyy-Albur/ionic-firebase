import { Injectable } from '@angular/core';
import { addDoc, Firestore, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(public afs: Firestore,) { }

  public addUser(value: any){
    const resultado = collection(this.afs, 'user');
    return addDoc(resultado,{ 
      nombre: value.name,
      apellido: value.surname,
      edad: parseInt(value.age)
    }
      );
  }
}
