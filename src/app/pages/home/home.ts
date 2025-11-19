import { Component } from '@angular/core';
import { Slider } from "../../layouts/components/slider/slider";
import { Header } from "../../layouts/components/header/header";
import { IAlbum, IProduct } from '../../../interface/interface';
import { Productitem } from "../../components/productitem/productitem";
import { Pictureitem } from "../../components/pictureitem/pictureitem";
import { Categories } from "../categories/categories";
import { Browser } from "../browser/browser";
import { CommonModule } from '@angular/common'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Slider, Productitem, Pictureitem, Categories, Browser, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  products:IProduct[] = [] 
  album: IAlbum[] = []

  
  ngOnInit(){
    this.getProduct()
    this.getAlbum()
  }

  async getProduct() {
    try {
          const res = await fetch("http://localhost:3000/products")
          this.products = await res.json()
        } catch (error) {
          console.log(error);            
        }
  }

  async getAlbum () {
    try {
          const res = await fetch("http://localhost:3000/album")
          this.album = await res.json()
        } catch (error) {
          console.log(error);
        }
  }

  ClickName(album: IAlbum){
    alert(`Hiển thị ${album.title}`)
  }

  addtoCart(product: IProduct) {
    alert(`Thêm vào giỏ hàng ${product.name}`)
  }
    
}
