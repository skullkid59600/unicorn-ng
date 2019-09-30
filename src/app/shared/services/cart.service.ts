import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Unicorn} from '../models/unicorn.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart = new BehaviorSubject<Unicorn[]>([]);

  public addToCart = (unicorn: Unicorn): void => {
    this.cart.next(this.cart.getValue().concat(unicorn));
  }

}
