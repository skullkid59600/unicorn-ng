import {Component, OnInit} from '@angular/core';
import {UnicornsService} from '../../shared/services/unicorns.service';
import {Unicorn} from '../../shared/models/unicorn.model';
import {MatDialog} from '@angular/material/dialog';
import {UnicornModalComponent} from './unicorn-modal/unicorn-modal.component';

@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent implements OnInit {
  public unicorns: Unicorn[] = [];

  constructor(private unicornService: UnicornsService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.unicornService.getUnicorns().subscribe((unicorns: Unicorn[]) => {
      this.unicorns = unicorns;
    });
  }

  deleteUnicorn(unicornToDelete: Unicorn) {
    this.unicornService.deleteUnicorns(unicornToDelete).subscribe(() => {
      this.unicorns = this.unicorns.filter(unicorn => unicorn.id !== unicornToDelete.id);
    });
  }

  editUnicorn(unicornToEdit: Unicorn, i) {
    this.dialog.open(UnicornModalComponent, {
      data: {unicorn: unicornToEdit},
    }).afterClosed().subscribe(unicorn => {
      if (unicorn) {
        this.unicornService.updateUnicorns(unicorn).subscribe((unicornFormBack) => {
          this.unicorns[i] = unicornFormBack;
        });
      }
    });
  }
}
