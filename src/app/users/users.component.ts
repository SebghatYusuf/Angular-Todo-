import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() hero: any;
  @Input() moreData: any;
  @Output() parentFunction = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.hero);
    console.log(this.moreData);
    this.parentFunction.emit('Sebghat');
  }

  myFunction (data: any){
    this.parentFunction.emit(data);
  }

}
