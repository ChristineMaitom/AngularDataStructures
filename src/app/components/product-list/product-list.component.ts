import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  searchTerm: string = '';
  newProductName: string = '';
  newProductPrice: number | null = null;
  products = [
    { name: 'Laptop', price: 999.99 },
    { name: 'Smartphone', price: 499.99 },
    { name: 'Tablet', price: 299.99 },
    { name: 'Headphones', price: 199.99 },
    { name: 'Smartwatch', price: 249.99 }
  ];

  filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addProduct() {
    if (this.newProductName && this.newProductPrice !== null) {
      this.products.push({ name: this.newProductName, price: this.newProductPrice });
      this.newProductName = ''; // Clear the name input after adding
      this.newProductPrice = null; // Clear the price input after adding
    }
  }
}
