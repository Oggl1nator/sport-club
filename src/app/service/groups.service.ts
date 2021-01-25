import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Group } from '../dto/group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private restService: RestService, private http: HttpClient) {
  }

  private url = 'rest/getGroupList';  // URL to web api

  test: Group[] = [];

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.url);
  }
}
