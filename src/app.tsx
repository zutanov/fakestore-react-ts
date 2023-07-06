import { SApp } from './assets/styles/app.styles';
import ProductCardComponent from './components/product/card/product-card.component';
import { ProductList } from './components/product/list/product-list.component';
import ProductListContainer from './components/product/list/product-list.container';
import { productListData } from './data/product.data';

function App() {
    return (
        <SApp>
            <ProductListContainer />

            {/* <ProductCardComponent {...productListData[0]} /> */}
        </SApp>
    );
}

export default App;
