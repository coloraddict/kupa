import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  numpads = ["1","2","3","4","5","6","7","8","9", ".", "0", "X"];

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(event: Event){
    event.preventDefault();
    event.stopPropagation();
    console.log("test");
  }

}
