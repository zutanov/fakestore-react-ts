import { SApp } from './assets/styles/app.styles';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import ProductListContainer from './components/product/list/product-list.container';

function App() {
    return (
        <SApp>
            <Header />
            <ProductListContainer />
            <Footer />
        </SApp>
    );
}

export default App;
