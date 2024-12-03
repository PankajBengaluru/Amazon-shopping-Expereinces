import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[] = [];

  ngOnInit(): void {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }

  goToCheckout() {
    // Navigate to checkout though any one router navigation or any other action)
  }
}
