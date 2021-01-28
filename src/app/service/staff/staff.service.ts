import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coach } from 'src/app/dto/coach';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private restService: RestService, private http: HttpClient) {
  }

  private url = 'rest/getCoachList';

  test: Coach[] = [];

  getStaff(): Observable<Coach[]> {
    return this.http.get<Coach[]>(this.url);
  }

  saveCoach(coach: Coach): any {
    const params = {
      coach
    };
    return this.restService.doCall('saveCoach', params);
  }
}
