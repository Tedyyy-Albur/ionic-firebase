import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  simple_form: FormGroup;
    
    constructor(public formBuilder: FormBuilder,) {

      this.simple_form = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        age: new FormControl('', Validators.required)
      });
    }

    add(value: any){


    }

}
