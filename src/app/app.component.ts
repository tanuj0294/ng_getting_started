import { Component } from "@angular/core";
import { templateSourceUrl } from "@angular/compiler";

@Component({
  selector: 'root',
  templateUrl:'./app.component.html'
})
export class MyAppComponent {
  pageTitle: string = 'Angular MOOC !';
  title: string = "Stylized inventory management !"
}