import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from 'src/Services/server-http.service';
import { UserRegistrantionService } from '../user-registrantion.service';

@Component({
  selector: 'app-user-search-delete',
  templateUrl: './user-search-delete.component.html',
  styleUrls: ['./user-search-delete.component.css']
})
export class UserSearchDeleteComponent implements OnInit {
  public name = '';
  public age = '';
  constructor(
    private service: UserRegistrantionService,
    private serverHttp: ServerHttpService
    ) { }

    ngOnInit(): void {
      this.serverHttp.getUsers().subscribe((data) => {
      console.log('profile', data);
      this.name = data.name;
      this.age = data.age;
      });
      // this.serverHttp.getComments().subscribe((data) => {
      //   console.log('comments', data);
      //   this.comments = data;
      // });
      // this.serverHttp.getPosts().subscribe((data) => {
      //   console.log('posts', data);
      //   this.posts = data;
      // });
    }

}
