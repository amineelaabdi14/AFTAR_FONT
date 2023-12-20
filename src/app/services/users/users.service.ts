import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/entities/member.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:8081/api/v1/members';
  constructor(private httpClient :HttpClient) { }

  getUsers():Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.url);
  }
}
