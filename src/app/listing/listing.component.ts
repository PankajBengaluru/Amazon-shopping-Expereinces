import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  imports:[CommonModule],
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  mobiles = [
    {
      id: 1,
      name: 'Samsung Galaxy S23 Ultra 5G',
      price: 79999,
      imageUrl: 'https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg'
    },
    {
      id: 2,
      name: 'Apple iPhone 15 Pro Max 5G',
      price: 128900,
      imageUrl: 'https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg'
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro 5G',
      price: 34999,
      imageUrl: 'https://m.media-amazon.com/images/I/61WCHiyKp8L._SX522_.jpg'
    },
    {
      id: 4,
      name: 'OnePlus 11 5G',
      price: 34999,
      imageUrl: 'https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg'
    },
    {
      id: 5,
      name: 'Xiaomi 13 Pro 5G',
      price: 14999,
      imageUrl: 'https://m.media-amazon.com/images/I/71ccoZNHoiL._SX679_.jpg'
    }
  ];


  cart: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  viewItem(id: number) {
    this.router.navigate(['/item', id]);
  }


  addToCart(mobile: any) {
    const existingItem = this.cart.find(item => item.id === mobile.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...mobile, quantity: 1 });
    }
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    alert(`${mobile.name} added to cart!`);
  }
}
