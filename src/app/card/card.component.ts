import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() name:string;
@Input() index:number;
@Input() password;
sessionToShow="mainMenu";
pin:string;
passwordAsArray=[];
showCloseButton=false;
showDeleteConfirm=false;


@Output() cardDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.passwordAsArray=Array.from(this.password);
    // converting a string to an array here this.password has a value of type string and it was converted to array using"Array.from(this.password).
    // we can store the value of the converted array to any other variable like "this.a=Array.from(this.password)";
console.log(this.index);
  }

confirmDelete() {
this.cardDelete.emit(this.index)
}

cancelDelete() {
  this.sessionToShow="mainMenu";
}


handleDelete() {
  this.sessionToShow="confirmDelete";
}

verifyPassword(givenPassword) {
if(this.password===givenPassword){
this.showCloseButton=true;
}
else{
  this.showCloseButton=false;
}
}

handleGeneratePin() {
this.sessionToShow = 'capturePin';
}


ngOnDestroy(){
  console.log(this.index);
}

}
