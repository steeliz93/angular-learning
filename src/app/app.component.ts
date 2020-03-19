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

  constructor() {}

  ngOnInit(): void {}

  handleFormData(eventData) {
    this.cardDetails.push(eventData);
  }

  handleDeleteData(deleteIndex) {
    this.cardDetails.splice(deleteIndex, 1);
  }
}
