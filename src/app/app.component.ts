import { Component } from '@angular/core';
import { UsersService } from './users.service';


// interface Alert {
//   type: string;
//   message: string;
// }

// const ALERTS = [{
//   type: 'success',
//   message: 'This is an success alert',
// }, {
//   type: 'info',
//   message: 'This is an info alert',
// }, {
//   type: 'warning',
//   message: 'This is a warning alert',
// }, {
//   type: 'danger',
//   message: 'This is a danger alert',
// }, {
//   type: 'primary',
//   message: 'This is a primary alert',
// }, {
//   type: 'secondary',
//   message: 'This is a secondary alert',
// }, {
//   type: 'light',
//   message: 'This is a light alert',
// }, {
//   type: 'dark',
//   message: 'This is a dark alert',
// }
// ];

interface dataType {
  name: string,
  age: number,
  educated: boolean,

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  


  // name = '';
  // data = <any>[];
  // constructor(user: UsersService) {
  //   user.getData().subscribe(data => {
  //     this.data = data;
  //   });
  //   // let data = user.getData();
  //   // this.name = data.name;
  // }





  // data = {
  //   name: "SEBGHAT",
  //   age: 22,
  // };
  // moreData = {
  //   angular: "Angular"
  // }
  // name = "PETER Parker";

  // parentFunction(data: any){
  //   console.log(data);
  // }
  // today = new Date();
  // string = 'Hello World';
  // money = 100;






  // getValues(values : any){
  // //   console.log(values)
  // color = 'yellow'
  // err = true;
  // updateColor() {
  //   if (this.color === 'green') {
  //     this.color = 'yellow';
  //     return;
  //   }
  //   this.color = 'green';

  // }
  // toggleError(){
  //   this.err = !this.err
  // }


  // alerts: Alert[] = [];
  // constructor() {
  //   this.reset();
  // }

  // close(alert: Alert) {
  //   this.alerts.splice(this.alerts.indexOf(alert), 1);
  // }

  // reset() {
  //   this.alerts = Array.from(ALERTS);
  // }

  // }
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
