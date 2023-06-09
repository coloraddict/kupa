import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { SignupData } from "./auth-data.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private token: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router){}

  getToken(){
    return this.token;
  }

  getisAuth(){
    return this.isAuthenticated;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  createUser(name: string, email: string, password: string){
    const signupData: SignupData = { name:name,  email:email, password: password };
    this.http.post("http://localhost:3000/api/user/signup", signupData)
    .subscribe(response => {
      console.log(response);
    })
  }

  login(email: string, password: string) {
    const authData: AuthData = { email:email, password: password };
    this.http.post<{token: string}>("http://localhost:3000/api/user/login", authData)
    .subscribe((response: any) => {
      const token = response.token;
      this.token = token;
      if(token) {
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        this.router.navigate(['/home']);
        window.localStorage.setItem("token", this.token);
        window.localStorage.setItem("username", response.name);
      }
    })
  }

}
