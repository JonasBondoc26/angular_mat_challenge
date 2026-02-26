import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  isDarkMode = false;

  minSkillLevel = 1;
  maxSkillLevel = 10;

  countries = ['Philippines', 'USA', 'Canada', 'Australia', 'Other'];


  passwordPattern = /^[A-Za-z][A-Za-z0-9]{7,}$/;

  formdata = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.passwordPattern)
    ]),
    gender: new FormControl('', Validators.required),
    address: new FormControl(''),
    birthDate: new FormControl(null, [
      Validators.required,
      this.birthYearValidator
    ]),
    country: new FormControl('', Validators.required),
    angularSkillLevel: new FormControl(5),
    acceptTerms: new FormControl(false, Validators.requiredTrue)
  });

  submitted = false;
  submittedData: any = null;

  birthYearValidator(control: AbstractControl) {
    if (!control.value) return null;

    const selectedYear = new Date(control.value).getFullYear();
    return selectedYear <= 2006 ? null : { invalidYear: true };
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.formdata.valid) {
      this.submittedData = this.formdata.value;
    } else {
      this.submittedData = null;
    }
  }
}