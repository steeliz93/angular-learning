import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  @Output() handleGivenPassword = new EventEmitter<string> ();

givenPassword:string;

  constructor() { }

  ngOnInit(): void {
  }

  handleKeyPress()
{
  this.handleGivenPassword.emit(this.givenPassword);
  console.log(this.givenPassword)
}

}
