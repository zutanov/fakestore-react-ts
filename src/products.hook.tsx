import { useState } from 'react';
import { ProductModel } from './models/product.model';
import { fetchProductsApi } from './services/product-api.service';
import { PRODUCTS_URL } from './constants/api.constants';
import { useDispatch } from 'react-redux';
import { setProductsAction } from './store/product/product.slice';

export const useProducts = () => {
    const dispatch = useDispatch();

    // const [products, setProducts] = useState<ProductModel[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    async function fetchProducts() {
        try {
            return await fetchProductsApi(PRODUCTS_URL).then(res => {
                // setProducts(res.data);
                dispatch(setProductsAction(res.data));
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

    // return { products, loading, error, fetchProducts };
    return { loading, error, fetchProducts };
};
