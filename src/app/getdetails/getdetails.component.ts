import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.css']
})
export class GetdetailsComponent implements OnInit {

  @Output() formSave = new EventEmitter <{name:string, password:string}> ();


formData:{name:string, password:string} = {name:"", password:""};
// for two-way binding

  constructor() { }

  ngOnInit(): void {
  }

  handleSave() {
    this.formSave.emit({...this.formData});
    //spread operator is used to create a new copy of object in order to avoid aliasing issue.
}

}
