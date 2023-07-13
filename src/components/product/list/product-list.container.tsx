import React, { memo, useEffect, useState } from 'react';
import { ProductModel } from '../../../models/product.model';
import { SProductContainer } from './product-list';
import { fetchProductsApi } from '../../../services/product-api.service';
import { PRODUCTS_URL } from '../../../constants/api.constants';
import { ProductList } from './product-list.component';
import Loader from '../../loader/loader.component';
import { useProducts } from '../../../products.hook';

const ProductListContainer = () => {
    const { loading, error, fetchProducts } = useProducts();

    useEffect(() => {
        fetchProducts();
    }, []);

    return loading ? (
        <Loader />
    ) : (
        // <SProductContainer>{error || <ProductList products={products}></ProductList>}</SProductContainer>
        <SProductContainer>{error || <ProductList></ProductList>}</SProductContainer>
    );
};

export default memo(ProductListContainer);
