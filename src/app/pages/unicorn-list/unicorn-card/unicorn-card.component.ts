import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../../../shared/models/unicorn.model';
import {CartService} from '../../../shared/services/cart.service';


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

  constructor(private cartService: CartService) {
  }

  public deleteUnicorn() {
    this.deleteUnicornEvent.emit(this.unicorn);
  }

  public editUnicorn() {
    this.editUnicornEvent.emit(this.unicorn);
  }

  public addToCart(): void {
    this.cartService.addToCart(this.unicorn);
  }

}
