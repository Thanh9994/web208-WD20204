import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../interface/interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-productitem',
  imports: [RouterLink],
  templateUrl: './productitem.html',
  styleUrl: './productitem.css',
})
export class Productitem {
  @Input() product:IProduct = {} as IProduct
  @Output() addtocart:EventEmitter<IProduct> = new EventEmitter()
  HandleClick(){
    this.addtocart.emit(this.product)
  }
}
