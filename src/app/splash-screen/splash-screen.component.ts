import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        display: 'none'
      })),
      transition('open => closed', [
        animate('.3s')
      ]),
    ]),
  ],
})
export class SplashScreenComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  splashScreenTime: boolean = true;

  constructor(private router: Router) {}


  ngOnInit(): void {
    setTimeout(() => {
      this.splashScreenTime = false;
    }, 1000)
  }

  onContinue(){
    this.router.navigate(['./login']);
  }

}
