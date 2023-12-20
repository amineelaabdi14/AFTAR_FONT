import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competition } from 'src/app/entities/competition.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  url = 'http://localhost:8081/api/v1/competitions';
  constructor(private httpClient :HttpClient) { }

  getCompetitions(page :number,size :number):Observable<Competition[]>{
    return this.httpClient.get<Competition[]>(this.url, {params: {page: page, size: size}});
  }
  addCompetition(competition :Competition):Observable<Competition>{
    return this.httpClient.post<Competition>(this.url, competition);
  }
  getCompetitionsCount():Observable<number>{
    return this.httpClient.get<number>(this.url + '/count');
  }
}
