import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Unicorn} from '../models/unicorn.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnicornsService {

  constructor(private http: HttpClient) {

  }

  public getUnicorns(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>('http://localhost:3000/unicorns');
  }

  public deleteUnicorns(unicorn): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/unicorns/${unicorn.id}`);
  }

  public updateUnicorns(unicorn): Observable<Unicorn> {
    return this.http.put<Unicorn>(`http://localhost:3000/unicorns/${unicorn.id}`, unicorn);
  }
}
