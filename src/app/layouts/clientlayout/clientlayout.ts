import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
@Component({
  selector: 'app-clientlayout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './clientlayout.html',
  styleUrl: './clientlayout.css',
})
export class Clientlayout {

}
