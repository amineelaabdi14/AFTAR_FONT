import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fish } from 'src/app/entities/fish.model';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private httpClient :HttpClient) { }
  url = 'http://localhost:8081/api/v1/fishes';
  getFish():Observable<Fish[]> {
    return this.httpClient.get<Fish[]>(this.url);
  }
}
