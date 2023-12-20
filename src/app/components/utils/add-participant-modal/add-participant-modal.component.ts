import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Competition } from 'src/app/entities/competition.model';
import { Member } from 'src/app/entities/member.model';
import { Ranking } from 'src/app/entities/ranking.model';

@Component({
  selector: 'app-add-participant-modal',
  templateUrl: './add-participant-modal.component.html',
  styleUrls: ['./add-participant-modal.component.css']
})
export class AddParticipantModalComponent {
  user!:number;
  competition!:string;
  @Input() users: Member[] = [];
  @Input() competitions:Competition[] = [];
  @Output() addParticipantEvent = new EventEmitter();
  addParticipant(){
    this.addParticipantEvent.emit({
      competitionCode:this.competition,
      memberNum:this.user,
    })
  }
}
