import { Injectable } from '@angular/core';
import {Donut} from "../models/donut.model";

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  private donuts: Donut[] = [       {
    id: '11111',
    name: 'Just Chocolate',
    icon: 'just-chocolate',
    price: 119,
    promo: 'limited',
    description: 'For the pure chocoholic.'
  },
    {
      id: '22222',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 129,
      promo: 'new',
      description: 'Sticky perfection.'
    },
    {
      id: '33333',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate drizzled with caramel.'
    },
    {
      id: '4444',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 139,
      description: 'For the sour advocate.'
    },
    {
      id: '55555',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 129,
      description: 'Delicious luscious lemon.'
    },

  ];

  constructor() { }

  read(){
    return this.donuts;
  }

  readOne(id: string)
  {
    const donut = this.read().find((donut: Donut) => donut.id === id);

    if (donut) {
      return donut;
    }

    return { name: '', icon: '', price: 0, description: ''};
  }

  create(payload: Donut)
  {
    this.donuts = [...this.donuts, payload];
  }

  update(payload: Donut)
  {
    this.donuts = this.donuts.map( (donut: Donut) =>
    {
      if (donut.id === payload.id)
      {
        return payload;
      }

      return donut;
    });
  }

  delete(payload: Donut)
  {
    this.donuts = this.donuts.filter( (donut: Donut) => donut.id !== payload.id);
    console.log(this.donuts);
  }

}
