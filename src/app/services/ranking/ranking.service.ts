import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ranking } from 'src/app/entities/ranking.model';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  url = 'http://localhost:8081/api/v1/rankings';
  constructor(private httpClient:HttpClient) { }
  registerMemberToCompetition({memberNum, competitionCode}: {memberNum: number, competitionCode: string}){
    return this.httpClient.post(this.url, {memberNum, competitionCode});
  }
}
