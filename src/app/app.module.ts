import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitonsComponent } from './components/competitons/competitons.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCompetitionModalComponent } from './components/utils/add-competition-modal/add-competition-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users/users.component';
import { HuntingComponent } from './components/hunting/hunting/hunting.component';
import { AddPartisipantModalComponent } from './component/add-partisipant-modal/add-partisipant-modal.component';
import { AddParticipantModalComponent } from './component/utils/add-participant-modal/add-participant-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitonsComponent,
    AddCompetitionModalComponent,
    UsersComponent,
    HuntingComponent,
    AddPartisipantModalComponent,
    AddParticipantModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
