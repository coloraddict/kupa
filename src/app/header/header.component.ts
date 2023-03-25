import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  username: string = 'user';
  userIsAuthenticated = false;
  private authListenerSub: Subscription;

  @Input() title: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.username = window.localStorage.getItem('username') || '';
    console.log(window.localStorage.getItem('username'));
    console.log(window.localStorage.getItem('username') === '');
    console.log("helo");
    this.authListenerSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })
  }

  ngOnDestroy(){
    this.authListenerSub.unsubscribe();
  }

}
