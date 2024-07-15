import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendarService {
  private url = 'http://localhost:8080/agendamento/'

  constructor(private http : HttpClient) { }

  agendarTarefa(cron:string): Observable<any>{
    return this.http.put(`${this.url}1`, cron);
  }
}
