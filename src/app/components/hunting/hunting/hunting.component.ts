import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/entities/competition.model';
import { Fish } from 'src/app/entities/fish.model';
import { Member } from 'src/app/entities/member.model';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { FishService } from 'src/app/services/fish/fish.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-hunting',
  templateUrl: './hunting.component.html',
  styleUrls: ['./hunting.component.css']
})
export class HuntingComponent implements OnInit{
  fishes :Fish[] = [];
  users :Member[] = [];
  competitions :Competition[] = [];
  competitionsCount!: number;
  constructor(
    private fishService :FishService,
    private userServive:UsersService,
    private competitionService:CompetitionService
  ) { }

  ngOnInit(): void {
    this.getCompetitionsCount();
    this.getFishes();
    this.getUsers();
    this.getCompetitions();
  }
  getFishes() {
    this.fishService.getFish().subscribe(data => {
      this.fishes = data;
    }
    );
  }
  getCompetitionsCount() {
    this.competitionService.getCompetitionsCount().subscribe(data => {
      this.competitionsCount = data;
    },(error) => {
      console.log(error);
    }
    );
  }
  getUsers() {
    this.userServive.getUsers().subscribe(data => {
      this.users = data;
    },(error) => {
      console.log(error);
    }
    );
  }
  getCompetitions() {
    this.competitionService.getCompetitions(0,900).subscribe(data => {
      this.competitions = data;
    },(error) => {
      console.log(error);
    }
    );
  }

}
