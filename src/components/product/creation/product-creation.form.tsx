import React, { memo, useState } from 'react';
import { ProductModel } from '../../../models/product.model';
import { SProductCreationForm } from './product-creation';
import Input from '../../input/input.component';
import FormButton from '../../button/form-button.component';
import { v4 as uuid, v4 } from 'uuid';

interface FormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>, product: ProductModel) => void;
}

const ProductCreationForm = memo(({ onSubmit }: FormProps) => {
    const [text, setText] = useState('');
    const [desc, setDesc] = useState('');

    const product = {
        title: text,
        description: desc,
        id: v4(),
        price: Math.floor(Math.random() * 100),
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    };

    return (
        <SProductCreationForm onSubmit={e => onSubmit(e, product)}>
            <Input setText={setText} desc='Title' />
            <Input setText={setDesc} desc='Description' />
            <FormButton />
        </SProductCreationForm>
    );
});

export default ProductCreationForm;
