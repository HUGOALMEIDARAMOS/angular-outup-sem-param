import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  value: number = 0;
  title: string = "My title"
  constructor() { }

  ngOnInit(): void {
  }

  incby(n: number){
    this.value += n;
  }

}
