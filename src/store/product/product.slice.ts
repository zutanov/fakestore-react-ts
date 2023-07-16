import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from './product-state.model';

const initialState: ProductState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsAction: (state, action) => {
            state.products = [...action.payload, ...state.products];
        },
    },
});

export const { setProductsAction } = productSlice.actions;
export default productSlice.reducer;
