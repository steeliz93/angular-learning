import { Component, OnInit, Output, EventEmitter, Input,OnChanges } from '@angular/core';


@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.css']
})
export class GetdetailsComponent implements OnInit, OnChanges{

disableSaveButton=true;

@Input() nameStatus=true;
showNameMessage=false;
showPasswordMessage=false;
  
  @Output() formSave = new EventEmitter <{name:string, password:string,confirmPassword:string}> ();
  @Output() nameCheck = new EventEmitter <string>();

formData:{name:string, password:string,confirmPassword:string} = {name:"", password:"",confirmPassword:""};
// for two-way binding

  constructor() { }

  ngOnChanges(){
   if(this.nameStatus!=undefined) {
    if(this.nameStatus===true){
      this.disableSaveButton=true;
      this.showNameMessage=true;
    }
    else{
      this.disableSaveButton=false;
      this.showNameMessage=false;
    }
console.log(this.nameStatus);
  }
}

  ngOnInit(): void {
  }

  handleSave() {
    this.formSave.emit({...this.formData});
    //spread operator is used to create a new copy of object in order to avoid aliasing issue.
}

confirmPasswordCheck() {
  if ( this.formData.password === this.formData.confirmPassword){
this.disableSaveButton=false;
this.showPasswordMessage=false;
  }
  else{
  this.disableSaveButton=true;
  this.showPasswordMessage=true;
  }
}

handleNameInput(){
this.nameCheck.emit(this.formData.name);
}


}
