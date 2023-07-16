import { ProductModel } from '../../../models/product.model';
import { SProductCard, SProductImg, SProductWrapper, SProductTitle, SProductDesc } from './product-card';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../store/product/product.selectors';
import Description from '../../description/description.component';

const ProductCard = () => {
    const products: ProductModel[] = useSelector(selectProducts);

    return (
        <>
            {products.map((el: ProductModel) => {
                return (
                    <SProductCard key={el.id}>
                        <SProductWrapper>
                            <SProductImg src={el.image} />
                        </SProductWrapper>
                        <SProductWrapper>
                            <SProductTitle>{el.title}</SProductTitle>
                            <Description text={el.description} />
                        </SProductWrapper>
                        <SProductWrapper>
                            <SProductTitle>{el.price} $</SProductTitle>
                        </SProductWrapper>
                    </SProductCard>
                );
            })}
        </>
    );
};
export default ProductCard;
