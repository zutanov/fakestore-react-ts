import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ProductState } from '../../models/state/product-state.model';

const initialState: ProductState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsAction(state, action) {
            state.products.push(action.payload);
        },
    },
});

export const { setProductsAction } = productSlice.actions;
export default productSlice.reducer;
