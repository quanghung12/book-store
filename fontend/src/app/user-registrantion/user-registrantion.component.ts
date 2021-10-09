import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserRegistrantionService } from '../user-registrantion.service';

@Component({
  selector: 'app-user-registrantion',
  templateUrl: './user-registrantion.component.html',
  styleUrls: ['./user-registrantion.component.css']
})
export class UserRegistrantionComponent implements OnInit {

  public user: User = new User("", 0, "", "", "");


  constructor(private service:UserRegistrantionService) { }

  ngOnInit(): void {
  }


  public registerNow(){
    console.log(this.user);
    let resp =this.service.doRegistrantion(this.user).subscribe(data => {
      console.log(data);
    });
      }

}
