import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { FirebaseServiceService } from './service/firebase-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent { 

  simple_form: FormGroup;

  constructor(public formBuilder: FormBuilder, 
  public firebaseService: FirebaseServiceService,
    public toastCtrl: ToastController) {

    this.simple_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    });
  }

  add(value: any){
    console.log(value);
    const respuesta = this.firebaseService.addUser(value);
    console.log(respuesta);
    
  }

  resetFields(){
    this.simple_form.reset()
  }
}
