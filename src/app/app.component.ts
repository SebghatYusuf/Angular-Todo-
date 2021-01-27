import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';

  alertName(name: string) {
    alert(name);
  }

  obj = {
    name: 'kelly',
    age: 20,
  };
  siteUrl = window.location;

  // lect #9  
  myEvent(event: any) {
    console.log(event);
  }

}
