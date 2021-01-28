import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coach } from '../../dto/coach';
import { Client } from 'src/app/dto/client';

@Injectable({
  providedIn: 'root'
})
export class VisitsRegistrationService {

  constructor(private restService: RestService, private http: HttpClient) {
  }

  private coachUrl = 'rest/getCoachList';
  private clientUrl = 'rest/getClientList';

  test: Coach[] = [];

  getCoaches(): Observable<Coach[]> {
    return this.http.get<Coach[]>(this.coachUrl);
  }

  getClients(coachId: number): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl, {params: {'coachId': coachId.toString()}});
  }

  public saveVisits(clients: Client[]): any {
    const params = {
      clients
    };
    return this.restService.doNoPipeCall('saveVisits', params);
  }
}
