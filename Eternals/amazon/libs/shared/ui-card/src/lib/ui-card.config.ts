import { ConfigButton } from 'libs/shared/ui-button/src/lib/ui-button.config';

export class CardConfig {
  id: number;
  title: string;
  desc: string;
  price: number;
  discount?: number;
  button?: ConfigButton;
  image?: string;
  PriceClass?: string | string[];

  constructor(data: {
    id: number;
    title: string;
    desc: string;
    price: number;
    discount?: number;
    button?: any;
    image?: string;
    PriceClass?: string;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.desc = data.desc;
    this.price = data.price;
    this.discount = data.discount;
    this.button = data.button;
    this.image = data.image;
    this.PriceClass = data.PriceClass;
  }
}
