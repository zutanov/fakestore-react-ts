import React, { memo, useEffect, useState } from 'react';
import { ProductModel } from '../../../models/product.model';
import { SProductContainer } from './product-list';
import { fetchProductsApi } from '../../../services/product-api.service';
import { PRODUCTS_URL } from '../../../constants/api.constants';
import { ProductList } from './product-list.component';
import Loader from '../../loader/loader.component';

const ProductListContainer = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    async function fetchProducts() {
        try {
            return await fetchProductsApi(PRODUCTS_URL).then(res => {
                setProducts(res.data);
            });
        } catch (e) {
            if (e instanceof Error) {
                setError(`Something went wrong! Error: ${e.message}`);
            }
        } finally {
            setIsLoading(!isLoading);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <SProductContainer>{error || <ProductList products={products}></ProductList>}</SProductContainer>
    );
};

export default memo(ProductListContainer);
