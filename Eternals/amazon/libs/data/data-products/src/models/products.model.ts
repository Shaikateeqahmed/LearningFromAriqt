export interface IProducts {
  id: number;
  image: string;
  title: string;
  desc: string;
  price: number;
  // discount?: number;
  category?:string;
}
