import { Component, Input, Output } from '@angular/core';
import { Productitem } from "../../components/productitem/productitem";
import { IProduct } from '../../../interface/interface';

@Component({
  selector: 'app-categorypage',
  standalone: true,
  imports: [Productitem],
  templateUrl: './categorypage.html',
  styleUrls: ['./categorypage.css'],
})
export class Categorypage {
  products: IProduct[] = [];
  ngOnInit() {
    this.getProduct()
  }
  async getProduct() {
    try {
          const res = await fetch("http://localhost:3000/products")
          this.products = await res.json()
        } catch (error) {
          console.log(error);            
        }
  }
}
