import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAlbum } from '../../../interface/interface';

@Component({
  selector: 'app-pictureitem',
  imports: [],
  templateUrl: './pictureitem.html',
  styleUrl: './pictureitem.css',
})
export class Pictureitem {
  @Input() album: IAlbum = {} as IAlbum
  @Output() clickname: EventEmitter<IAlbum> = new EventEmitter()
  HendleClick() {
    this.clickname.emit(this.album)
  }

}
