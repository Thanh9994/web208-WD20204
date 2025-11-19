import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../interface/interface';
import { Productitem } from "../../components/productitem/productitem";
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-detailproduct',
  imports: [Productitem, CommonModule],
  templateUrl: './detailproduct.html',
  styleUrl: './detailproduct.css',
})
export class Detailproduct {
  route = inject(ActivatedRoute)
  productId = this.route.snapshot.params['id']
  products: IProduct = {} as IProduct
  allproducts: IProduct[] = [];
  async ngOnInit() {
    try {
      const res = await fetch(`http://localhost:3000/products/${this.productId}`)
      this.products = await res.json();

      const res2 = await fetch('http://localhost:3000/products');
      this.allproducts = await res2.json();
      
    } catch (error) {
      console.log(error);
    }
  }
}
