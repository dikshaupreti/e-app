// src/models/Product.ts
export default class Product {
    constructor(
      public id: number,
      public title: string,
      public price: number,
      public description: string,
      public image: string,
      public quantity: number = 1
    ) {}
  }
  