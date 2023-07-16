import { ProductModel } from '../models/product.model';
import axios, { AxiosResponse } from 'axios';

export const fetchProductsApi = async (url: string): Promise<AxiosResponse<ProductModel[]>> => {
    const { data } = await axios.get(url);
    return data;
};
