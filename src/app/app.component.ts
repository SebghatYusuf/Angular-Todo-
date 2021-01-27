import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  name = 'App Name';

  getName (){
    return this.name;
  };
  obj = {
    name: 'kelly',
    age : 20, 
  };
  siteUrl = window.location;

  
  
}
