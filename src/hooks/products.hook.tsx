import { useState } from 'react';

import { fetchProductsApi } from '../services/product-api.service';
import { PRODUCTS_URL } from '../constants/api.constants';
import { useDispatch } from 'react-redux';
import { setProductsAction } from '../store/product/product.slice';

export const useProducts = () => {
    const dispatch = useDispatch();

    // const [products, setProducts] = useState<ProductModel[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            await fetchProductsApi(PRODUCTS_URL).then(res => {
                // setProducts(res.data);

                dispatch(setProductsAction(res));
            });
            setLoading(false);
        } catch (e) {
            if (e instanceof Error) {
                setError(`Something went wrong! Error: ${e.message}`);
            }
        } finally {
            setLoading(false);
        }
    }

    // return { products, loading, error, fetchProducts };
    return { loading, error, fetchProducts };
};
