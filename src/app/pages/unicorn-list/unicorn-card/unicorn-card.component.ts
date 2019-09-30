import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../../../shared/models/unicorn.model';


@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent {

  @Input()
  public unicorn: Unicorn;

  @Output()
  public deleteUnicornEvent = new EventEmitter();

  @Output()
  public editUnicornEvent = new EventEmitter();

  constructor() {
  }

  deleteUnicorn() {
    this.deleteUnicornEvent.emit(this.unicorn);
  }

  editUnicorn() {
    this.editUnicornEvent.emit(this.unicorn);
  }
}
//   export class DialogOverviewExample {
//   animal: string;
//   name: string; }
//
//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       width: '250px',
//       data: {name: this.name, animal: this.animal}
//     });
//
// }
//
// function Ctrl($scope) {
//   var hasLiked = false;
//   // tslint:disable-next-line:only-arrow-functions
//   $scope.likeClick = function () {
//     if (!hasLiked) {
//       hasLiked = true;
//       $scope.liked = 'Unlike';
//       $scope.likeCount += 1;
//     } else {
//       hasLiked = false;
//       $scope.liked = 'Like';
//       $scope.likeCount -= 1;
//     }
//   };
// }
//
// export interface DialogData {
//   animal: string;
//   name: string;
// }
//
