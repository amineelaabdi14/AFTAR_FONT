import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/entities/competition.model';
import { Member } from 'src/app/entities/member.model';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-competitons',
  templateUrl: './competitons.component.html',
  styleUrls: ['./competitons.component.css'],
})
export class CompetitonsComponent implements OnInit {
  competitions: Competition[] = [];
  users:Member  [] = [];
  page = 0;
  pages!: number;
  size = 1;
  constructor(private service: CompetitionService,private userServive:UsersService) {}

  ngOnInit(): void {
    this.service.getCompetitionsCount().subscribe(
      (count) => {
        this.pages = Math.floor(count / this.size)-1;
      },
      (error) => {
        console.log(error);
      }
    );
    this.service.getCompetitions(this.page, this.size).subscribe(
      (competitions) => {
        console.log(this.page);
        
        this.competitions = competitions;
      },
      (error) => {
        console.log(error);
      }
    );
    this.userServive.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addCompetition(competition: Competition) {
    this.service.addCompetition(competition).subscribe(
      (competition) => {
        this.competitions.push(competition);
      },
      (error) => {
        alert(error.error.errors[0].defaultMessage);
      }
    );
  }
  nextPage() {
     if (this.page < this.pages) {
      this.page++;
      this.service.getCompetitions(this.page, this.size).subscribe(
        (competitions) => {
          this.competitions = competitions;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  prevPage() {
    if (this.page > 0) {
      this.page--;
      this.service.getCompetitions(this.page, this.size).subscribe(
        (competitions) => {
          this.competitions = competitions;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
