import { AppServiceService } from './app-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UsersService } from './users.service';
import { parseJsonText } from 'typescript';
import { ArrayType } from '@angular/compiler';


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

// interface dataType {
//   name: string,
//   age: number,
//   educated: boolean,

// }

interface responseType {
  hits?: [],
  total?: number,
  totalHits?: number,

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = <any>[]
  response: responseType = {
    hits: [],
    total: 0,
    totalHits: 0,
  };
  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),

  // });

  // collectData(){
  //   console.warn(this.loginForm.value )
  // }
  constructor(private appservice: AppServiceService) {

  }

  async loadImages() {
    var images = this.appservice.getImages().subscribe(response => {
      this.response = response;
      console.log(this.response.hits);
      // this.images = response.hits;
      this.images = this.response.hits;
    });
    // this.images = this.response.hits;

  }

  viewPhoto(photo: any) {
    window.open(photo?.largeImageURL, '_blank')
    console.warn(photo);
  }

  handleSubmit(value: any) {
    this.images = [];
    this.appservice.search(value?.search).subscribe(response => {
      this.response = response;
      this.images = this.response.hits;
      console.log(response)
    });
  }








  // userData = {
  //   'email': 'sebghatyusuf@yahoo.com',
  //   'password': 'mypass',
  //   'address': 'kabul'
  // }


  // handleSubmit(data: any){
  //   console.warn(data);

  // }

  // constructor(
  //   private vcr: ViewContainerRef,
  //   private cfr: ComponentFactoryResolver,

  // ) {

  // }

  // async loadAdmin() {
  //   this.vcr.clear();
  //   const { AdminlitComponent } = await import('./adminlit/adminlit.component');
  //   this.vcr.createComponent(
  //     this.cfr.resolveComponentFactory(AdminlitComponent)
  //   );
  // }
  // async loadUser() {
  //   this.vcr.clear();
  //   const { UserlistComponent } = await import('./userlist/userlist.component');
  //   this.vcr.createComponent(
  //     this.cfr.resolveComponentFactory(UserlistComponent)
  //   );
  // }




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
