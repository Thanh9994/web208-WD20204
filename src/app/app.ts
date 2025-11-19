import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/components/header/header";
import { Footer } from "./layouts/components/footer/footer";
import { FormsModule } from '@angular/forms';
import { IProduct } from '../interface/interface';
import { Productitem } from './components/productitem/productitem';
import { Slider } from "./layouts/components/slider/slider";
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule ],
  templateUrl: './app.html',
  styleUrl:'./app.css'
})
export class App {

}
