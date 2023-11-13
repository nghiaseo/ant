import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  click(e:Event){
    console.log(e.target)
    const target = e.target as HTMLDivElement
    target.style.height='300px'
  }

}
