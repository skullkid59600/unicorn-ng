import {Component} from '@angular/core';
import {from, of} from 'rxjs';
import {filter, flatMap, map, pluck, reduce, tap, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UNICORNS 🦄';

  constructor() {
    of([
      {name: 'bob', age: 32},
      {name: 'dylan', age: 45}
    ]).pipe(
      flatMap(e => e),
      filter(e => e.age >= 35),
      map(e => ({...e, name: e.name.toUpperCase()})),
      toArray(),
    ).subscribe(e => {
      console.log(e);
    });

    of([
      {name: 'bob', age: 32},
      {name: 'dylan', age: 45}
    ]).pipe(
      map(e => {
        return e
          .filter(e1 => e1.age >= 35)
          .map(e2 => ({...e2, name: e2.name.toUpperCase()}));
      })
    ).subscribe(e => {
      console.log(e);
    });

  }

}

