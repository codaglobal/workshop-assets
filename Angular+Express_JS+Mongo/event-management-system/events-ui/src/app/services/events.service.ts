import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  getEvents(): Observable<any> {
    let url = 'https://api.myjson.com/bins/hppuc';
    return this.httpClient.get(url);
  }
}
