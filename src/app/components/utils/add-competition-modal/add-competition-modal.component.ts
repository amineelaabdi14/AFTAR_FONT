import { Component, EventEmitter, Output } from '@angular/core';
import { Competition } from 'src/app/entities/competition.model';
import { TextFormatter } from 'src/app/helpers/dateformatter.helper';

@Component({
  selector: 'app-add-competition-modal',
  templateUrl: './add-competition-modal.component.html',
  styleUrls: ['./add-competition-modal.component.css']
})
export class AddCompetitionModalComponent {
  day!:Date;
  startTime!:string;
  endTime!:string;
  location!:string;
  numberOfParticipants!:number;
  @Output() addCompetitionEvent = new EventEmitter<Competition>();
  constructor() { }
  addCompetition(){
    this.addCompetitionEvent.emit({
      date:TextFormatter.formatText(new Date(this.day)),
      startTime:this.startTime,
      endTime:this.endTime,
      location:this.location,
      numberOfParticipants:this.numberOfParticipants
    })
  }
}
