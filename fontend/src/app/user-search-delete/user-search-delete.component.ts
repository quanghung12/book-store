import { Component, OnInit } from '@angular/core';
import { UserRegistrantionService } from '../user-registrantion.service';

@Component({
  selector: 'app-user-search-delete',
  templateUrl: './user-search-delete.component.html',
  styleUrls: ['./user-search-delete.component.css']
})
export class UserSearchDeleteComponent implements OnInit {

  users: any;

  constructor(private service: UserRegistrantionService) { }

  ngOnInit(): void {
    let resp=this.service.getUsers();
    resp.subscribe((data)=> this.users=data);
  }

}
