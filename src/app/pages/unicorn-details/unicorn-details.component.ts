import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UnicornsService} from '../../shared/services/unicorns.service';
import {Unicorn} from '../../shared/models/unicorn.model';

@Component({
  selector: 'app-unicorn-details',
  templateUrl: './unicorn-details.component.html',
  styleUrls: ['./unicorn-details.component.scss']
})
export class UnicornDetailsComponent {

  private unicorn: Unicorn;

  constructor(route: ActivatedRoute,
              unicornService: UnicornsService) {
    route.params.subscribe(params => {
      unicornService.getUnicorn(params.id).subscribe(unicorn => this.unicorn = unicorn);
    });
  }

}
