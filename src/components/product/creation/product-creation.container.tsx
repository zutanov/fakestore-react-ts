import React, { useCallback, useState } from 'react';
import Button from '../../button/button.component';
import Modal from '../../modal/modal.component';
import { SProductCreationContainer } from './product-creation';
import ProductCreationForm from './product-creation.form';
import { ProductModel } from '../../../models/product.model';
import { useDispatch } from 'react-redux';
import { setProductsAction } from '../../../store/product/product.slice';

const ProductCreationContainer = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const handleModalClose = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target;
        if (target.id === 'modal' || target.tagName === 'IMG') {
            setVisible(false);
        }
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>, product: ProductModel) => {
        e.preventDefault();

        if (product.title.length >= 3) {
            dispatch(setProductsAction([product]));
            setVisible(false);
        } else {
            alert('Enter a title');
        }
    }, []);

    return (
        <SProductCreationContainer>
            <Button setVisible={setVisible} />
            <Modal title='Create Product' visible={visible} onClose={handleModalClose}>
                <ProductCreationForm onSubmit={handleSubmit} />
            </Modal>
        </SProductCreationContainer>
    );
};

export default ProductCreationContainer;
