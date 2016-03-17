import React, {Component} from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';


import App from './containers/app';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);


export default class Root extends Component{
    render() {
        return <Provider store={store}>
                <App />
            </Provider>
    }
}