import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/entities/competition.model';
import { Member } from 'src/app/entities/member.model';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { RankingService } from 'src/app/services/ranking/ranking.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users :Member[] = [];
  competitions :Competition[] = [];
  constructor(private service :UsersService, private CompetitionService:CompetitionService,private rankingService:RankingService) { }
  ngOnInit(): void {
    this.getUsers();
    this.getCompetitions();
  }
  getUsers(){
    this.service.getUsers().subscribe(data => {
      this.users = data;
    }
    );  
  }
  getCompetitions(){
    this.CompetitionService.getCompetitions(0,900).subscribe(data => {
      console.log(data);
      
      this.competitions = data;
    }
    );  
  }
  addParticipant({memberNum, competitionCode}: {memberNum: number, competitionCode: string}) {
    this.rankingService.registerMemberToCompetition({competitionCode,memberNum}).subscribe(
      (ranking) => {
        console.log(ranking);
      },
      (error) => {
        console.log(error);
        
      }
    );
  }
}
