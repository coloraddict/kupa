import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignUp(){
    this.router.navigate(['./signup']);
  }

  onLogin(form: NgForm){
    if(form.invalid) {
      return;
    }
    this.authService.login(form.value.email, form.value.password);
  }

}
