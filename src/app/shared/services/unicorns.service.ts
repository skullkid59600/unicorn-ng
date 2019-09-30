import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Unicorn} from '../models/unicorn.model';
import {Observable} from 'rxjs';
import {filter, flatMap, map, toArray} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnicornsService {

  constructor(private http: HttpClient) {
  }

  public getUnicorns(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>('http://localhost:3000/unicorns');
  }

  public getUnicornsWithMoreThanYearAndTwoCapacities(): Observable<Unicorn[]> {
    return this.getUnicorns().pipe(
      flatMap(e => e),
      filter(unicorn => unicorn.birthyear < new Date().getFullYear()),
      filter(unicorn => unicorn.capacities.length >= 2),
      map(unicorn => ({...unicorn, name: unicorn.name.toUpperCase()})),
      toArray(),
    );
  }

  public deleteUnicorn(unicorn: Unicorn): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/unicorns/${unicorn.id}`);
  }

  public updateUnicorn(unicorn: Unicorn): Observable<Unicorn> {
    return this.http.put<Unicorn>(`http://localhost:3000/unicorns/${unicorn.id}`, unicorn);
  }
}
