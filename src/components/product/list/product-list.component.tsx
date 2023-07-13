import { memo } from 'react';
import { ProductModel } from '../../../models/product.model';
import ProductCardComponent from '../card/product-card.component';
import { SProductList } from './product-list';

type Products = {
    products: ProductModel[];
};

// export const ProductList: React.FC<Products> = memo(products => {
export const ProductList = () => {
    return (
        <SProductList>
            {/* <ProductCardComponent products={products.products} /> */}
            <ProductCardComponent />
        </SProductList>
    );
};
