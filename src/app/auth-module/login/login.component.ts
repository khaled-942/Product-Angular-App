import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any
  constructor(private fb: FormBuilder, private route : Router) { }

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      logInEmail: [null, [Validators.required]],
      logInPassword: [null, [Validators.required]],
    })
  }
  get controls(){
    return this.loginForm.controls
  }
  submitValue() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.controls);
    alert(this.loginForm.value)
  }
  navigate(){
    this.route.navigate(['/signup'])
  }
}
