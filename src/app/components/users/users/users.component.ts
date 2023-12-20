import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/entities/member.model';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users :Member[] = [];
  constructor(private service :UsersService) { }
  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    }
    );
  }
  nextPage() {
    console.log('next page');
  }
  prevPage() {  
    console.log('prev page');
  }
  addParticipant(user: Member) {
    console.log(user);
  }
}
