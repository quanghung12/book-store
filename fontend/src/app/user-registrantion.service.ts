import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrantionService {

  public API: string = 'http://localhost:8080/users';

  constructor(private http:HttpClient) { }

  public doRegistrantion(user : User): Observable<User> {
    return this.http.post(this.API, user);
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/users");
  }

}
