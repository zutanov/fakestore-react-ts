import ProductCardComponent from '../card/product-card.component';
import { SProductList } from './product-list';

export const ProductList = () => {
    return (
        <SProductList>
            <ProductCardComponent />
        </SProductList>
    );
};
