import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { UsersComponent } from './users/users.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CustomStyleDirective } from './custom-style.directive';
import { HttpClientModule } from '@angular/common/http';
import { UsersTestModule } from './users-test/users-test.module';
import { AdminlitComponent } from './adminlit/adminlit.component';
import { UserlistComponent } from './userlist/userlist.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    NotFoundPageComponent,
    CustomStyleDirective,
    AdminlitComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    UsersTestModule,
    AdminModule,
    ReactiveFormsModule,

    // NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
