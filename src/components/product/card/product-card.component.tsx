import React, { memo, FC } from 'react';
import { ProductModel } from '../../../models/product.model';
import { SProductCard, SProductImg, SProductWrapper, SProductTitle, SProductDesc } from './product-card';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../models/state/products/product.selectors';
import Description from '../../description/description.component';

type ProductCardProps = ProductModel;

type Products = {
    products: ProductModel[];
};

// const ProductCard = ({ products }: Products) => {

const ProductCard = () => {
    const products: ProductModel[] = useSelector(selectProducts);
    const product = products[0];

    // const cutText = (desc: string, title: string) => {
    //     if (desc.length > 140 && title.length > 75) {
    //         return `${desc.slice(0, 130)}...`;
    //     } else if (desc.length > 180) {
    //         return `${desc.slice(0, 180)}...`;
    //     }
    //     return desc;
    // };

    return (
        <>
            {product.map((el: ProductCardProps) => {
                return (
                    <SProductCard key={el.id}>
                        <SProductWrapper>
                            <SProductImg src={el.image} />
                        </SProductWrapper>
                        <SProductWrapper>
                            <SProductTitle>{el.title}</SProductTitle>
                            {/* <SProductDesc>{cutText(el.description, el.title)}</SProductDesc> */}
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
