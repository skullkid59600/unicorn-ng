import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Unicorn} from '../../../shared/models/unicorn.model';

@Component({
  selector: 'app-unicorn-modal',
  templateUrl: './unicorn-modal.component.html',
  styleUrls: ['./unicorn-modal.component.scss']
})
export class UnicornModalComponent implements OnInit {

  public unicorn: Unicorn;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.unicorn = this.data.unicorn;
  }

}
