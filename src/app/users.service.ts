import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { userDataType } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getData() {
    let data: userDataType = {
      name: 'Sebghatullah Yusuf',
      age: 22,
      country: 'Afghanistan',
      single: true,
      url: 'http://www.sebghatyusuf.com/'
    }
    return data;
  }




  // getData() {
  //   let url = 'https://jsonplaceholder.typicode.com/todos/';
  //   return this.http.get(url);
  // }

}
