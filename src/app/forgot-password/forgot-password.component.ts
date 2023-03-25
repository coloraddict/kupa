import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  byEmail: boolean = false;
  byPhone: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinue(){
    this.router.navigate(['./login']);
  }

  onCommunicationByEmail(){
    this.byEmail = true;
    this.byPhone = false;
  }

  onCommunicationByPhone(){
    this.byPhone = true;
    this.byEmail = false;
  }

}
