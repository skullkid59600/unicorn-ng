import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Unicorn} from '../models/unicorn.model';
import {forkJoin, Observable} from 'rxjs';
import {filter, flatMap, map, pluck, reduce, toArray} from 'rxjs/operators';
import {CapacitiesService} from './capacities.service';
import {Capacity} from '../models/capacity.model';

@Injectable({
  providedIn: 'root'
})
export class UnicornsService {

  constructor(private http: HttpClient,
              private capacitiesService: CapacitiesService) {
  }

  public getUnicorns(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>('http://localhost:3000/unicorns');
  }

  public getUnicornsWithCapacities(): Observable<Unicorn[]> {
    return forkJoin([
      this.getUnicorns(),
      this.capacitiesService.getCapacities(),
    ]).pipe(
      map(([unicorns, capacities]) =>
        unicorns.map((unicorn: Unicorn): Unicorn => ({
          ...unicorn,
          capacitiesLabels: unicorn.capacities.map((c: number): string =>
            capacities.find((c2: Capacity) => c2.id === c).label
          )
        }))
      ),
    );
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

  public sumAges(): Observable<number> {
    return this.getUnicorns().pipe(
      flatMap(e => e),
      pluck('birthyear'),
      map(birthyear => new Date().getFullYear() - birthyear),
      reduce((acc, age) => acc + age, 0),
    );
  }

  public deleteUnicorn(unicorn: Unicorn): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/unicorns/${unicorn.id}`);
  }

  public updateUnicorn(unicorn: Unicorn): Observable<Unicorn> {
    return this.http.put<Unicorn>(`http://localhost:3000/unicorns/${unicorn.id}`, unicorn);
  }
}
