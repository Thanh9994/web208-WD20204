export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface IAlbum {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}