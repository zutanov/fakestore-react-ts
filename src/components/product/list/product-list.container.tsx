import { memo, useEffect } from 'react';
import { SProductContainer } from './product-list';

import { ProductList } from './product-list.component';
import Loader from '../../loader/loader.component';
import { useProducts } from '../../../hooks/products.hook';
import ProductCreationContainer from '../creation/product-creation.container';

const ProductListContainer = () => {
    const { loading, error, fetchProducts } = useProducts();

    useEffect(() => {
        fetchProducts();
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <>
            <SProductContainer>{error || <ProductList />}</SProductContainer>
            <ProductCreationContainer />
        </>
    );
};

export default memo(ProductListContainer);
