import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  @Input() title!: string;
  @Output() plusOne = new EventEmitter<any>()
  @Output() plustwo = new EventEmitter<any>()
  @Output() minusOne = new EventEmitter<any>()
  @Output() minustwo = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  plusOneClick(){
    this.plusOne.emit()
  }

  plusTwoClick(){
    this.plustwo.emit()
  }

  minuOneClick(){
    this.minusOne.emit()
  }

  minutwoClick(){
    this.minustwo.emit()
  }

}
