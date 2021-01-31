import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getData(){
    return {
      id: 100,
      name: "Peter",
      age: 25,
      single: true,
    }
  }
}
