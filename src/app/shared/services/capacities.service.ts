import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Capacity} from '../models/capacity.model';

@Injectable({
  providedIn: 'root'
})
export class CapacitiesService {

  constructor(private http: HttpClient) {
  }

  public getCapacities(): Observable<Capacity[]> {
    return this.http.get<Capacity[]>('http://localhost:3000/capacities');
  }
}
