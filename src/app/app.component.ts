import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  cardDetails = [
    { name: "a", password: "a" },
  ];
  nameCheckStatus:boolean;

  constructor() {}

  ngOnInit(): void {}

  handleFormData(eventData) {
    this.cardDetails.push(eventData);
  }

  handleDeleteData(deleteIndex) {
    this.cardDetails.splice(deleteIndex, 1);
  }

handleNameData(data){
let nameArray= this.cardDetails.map(x => x.name);
 // .map is used for data formatting, here cardDetails is an array of objects with key:name of type string and key:password of type string.
// here .map function is used to format the data structure above to an array of values of key name and we will store it in a new array name "nameAray".
if(nameArray.includes(data)){
this.nameCheckStatus=true;
}
else{
  this.nameCheckStatus=false;
}
  }

}
