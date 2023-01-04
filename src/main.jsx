import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';

// import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import {StateContextProvider} from "./context";
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <ThirdwebProvider desiredChainId={ChainId.Goerli}>
            <Router>
                <StateContextProvider>
                    <App/>
                </StateContextProvider>
            </Router>
        </ThirdwebProvider>
    </Provider>
)