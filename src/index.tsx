import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import GlobalStyles from './assets/styles/global.styles';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
        <GlobalStyles />
    </React.StrictMode>
);
