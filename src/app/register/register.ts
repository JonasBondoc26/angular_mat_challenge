import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  formdata = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', Validators.required),
    address: new FormControl(''),
    birthDate: new FormControl(null, Validators.required),
    angularSkillLevel: new FormControl(5),
    country: new FormControl('', Validators.required),          
    acceptTerms: new FormControl(false, Validators.requiredTrue) 
  });

  minSkillLevel = 1;
  maxSkillLevel = 10;
  submitted = false;    
  submittedData: any = null;

  countries = ['Philippines', 'USA', 'Canada', 'Australia', 'Other']; 

  onClickSubmit() {
    this.submitted = true;
    if (this.formdata.valid) {
      this.submittedData = this.formdata.value;
      console.log('Form Submitted', this.submittedData);
    } else {
      console.log('Form Invalid');
      this.submittedData = null;
    }
  }
}