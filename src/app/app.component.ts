import {Component} from '@angular/core';
import {CartService} from './shared/services/cart.service';
import {Unicorn} from './shared/models/unicorn.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UNICORNS 🦄';

  public cart: Unicorn[] = [];

  constructor(cartService: CartService) {
    cartService.cart.subscribe(cart => this.cart = cart);
  }

}

