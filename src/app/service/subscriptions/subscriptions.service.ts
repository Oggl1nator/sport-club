import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'src/app/dto/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(private restService: RestService, private http: HttpClient) {
  }

  private url = 'rest/getSubscriptionList';

  test: Subscription[] = [];

  getSubscriptions(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.url);
  }
}
