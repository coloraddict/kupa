import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { SuccessfulSignupComponent } from './successful-signup/successful-signup.component';

const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'verify', component: EmailVerifyComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'success-signup', component: SuccessfulSignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'location', component: LocationComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
