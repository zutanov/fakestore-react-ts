import { ProductModel } from '../models/product.model';
import axios, { AxiosResponse } from 'axios';

export const fetchProductsApi = async (url: string): Promise<AxiosResponse<ProductModel[]>> => {
    const res = await axios.get(url);
    return res;
};
