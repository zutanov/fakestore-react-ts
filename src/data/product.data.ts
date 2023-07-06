import { ProductModel } from '../models/product.model';

export const productListData: ProductModel = await fetch('https://fakestoreapi.com/products').then(res => res.json());
