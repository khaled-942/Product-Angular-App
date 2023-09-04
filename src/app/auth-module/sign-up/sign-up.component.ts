import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup | any
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fname: [null, [Validators.required]],
      email: [null, [Validators.required]],
      uname: [null, [Validators.required]],
      pass: [null, [Validators.required]],
      cpass: [null, [Validators.required]],

      // start with one input
      
      formArrayAddress: this.fb.array([null])

      // start with two input

      // formArrayAddress: this.fb.array([null,[]])
    })
  }
  createAccount() {
    console.log(this.signUpForm.value)
  }

  get formControls() {
    return this.signUpForm.controls
  }

  addNewAddress(){
    const addInput = new FormControl(null,[Validators.required])
    this.adds.push(addInput);
    
  }

  delSpecAddress(index:number){
    this.adds.removeAt(index);
    
  }

  get adds(){
    return this.signUpForm.controls.formArrayAddress as FormArray;
  }

  loginNavigate() {
    this.route.navigate(['/login'])
  }

}
