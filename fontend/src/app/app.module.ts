import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrantionComponent } from './user-registrantion/user-registrantion.component';
import { UserSearchDeleteComponent } from './user-search-delete/user-search-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrantionService } from './user-registrantion.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrantionComponent,
    UserSearchDeleteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserRegistrantionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
