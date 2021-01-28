import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getValues(values : any){
    console.log(values)
  }
  // name = 'mohammad';
  
  // color = 'blue';
  
  
  // show = 'blue';
  // toggleShow() {
  //   this.show === '' ? this.show = 'yes' : this.show = '';
  // }

  // name = "bruce"
  // disabledBox = true;

  // toggleBox() {
  //   this.disabledBox = !this.disabledBox;
  // }

  // title = 'Todo App';

  // alertName(name: string) {
  //   alert(name);
  // }

  // obj = {
  //   name: 'kelly',
  //   age: 20,
  // };
  // siteUrl = window.location;

  // // lect #9  
  // myEvent(event: any) {
  //   console.log(event);
  // }

  // inputValue = "";
  // getVal(value: string) {
  //   this.inputValue = value;
  // }

}
