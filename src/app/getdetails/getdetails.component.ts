import { Component, OnInit, Output, EventEmitter, Input,OnChanges } from '@angular/core';


@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.css']
})
export class GetdetailsComponent implements OnInit, OnChanges{

showSaveButton=false;

@Input() nameStatus;
  
  @Output() formSave = new EventEmitter <{name:string, password:string,confirmPassword:string}> ();
  @Output() nameCheck = new EventEmitter <string>();

formData:{name:string, password:string,confirmPassword:string} = {name:"", password:"",confirmPassword:""};
// for two-way binding

  constructor() { }

  ngOnChanges(){
    if(this.nameStatus===true){
      this.showSaveButton=false;
    }
    else{
      this.showSaveButton=true;
    }
console.log(this.nameStatus);
  }

  ngOnInit(): void {
  }

  handleSave() {
    this.formSave.emit({...this.formData});
    //spread operator is used to create a new copy of object in order to avoid aliasing issue.
}

confirmPasswordCheck() {
  if ( this.formData.password === this.formData.confirmPassword){
this.showSaveButton=true;
  }
  else{
  this.showSaveButton=false;
  }
}

handleNameInput(){
this.nameCheck.emit(this.formData.name);
}


}
