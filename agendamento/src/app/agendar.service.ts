import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendarService {
  private url = 'http://localhost:8080/api/cron/'

  constructor(private http : HttpClient) { }

  agendarTarefa(cron:string): Observable<any>{
    const cronJson = { "cronograma": cron }
    console.log(cronJson)
    return this.http.put(`${this.url}`, cronJson);
  }
}
