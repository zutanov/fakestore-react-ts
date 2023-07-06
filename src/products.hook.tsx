import { useState } from 'react';
import { ProductModel } from './models/product.model';
import { fetchProductsApi } from './services/product-api.service';
import { PRODUCTS_URL } from './constants/api.constants';

export const useProducts = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    async function fetchProducts() {
        try {
            return await fetchProductsApi(PRODUCTS_URL).then(res => {
                setProducts(res.data);
                setLoading(!loading);
            });
        } catch (e) {
            if (e instanceof Error) {
                setError(`Something went wrong! Error: ${e.message}`);
            }
        } finally {
            setLoading(!loading);
        }
    }

    return { products, loading, error, fetchProducts };
};
