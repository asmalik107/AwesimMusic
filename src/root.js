'use strict';

import React, {Component} from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import {Router} from 'react-native-router-flux';
import scenes from './routes/scenes';


const store = applyMiddleware(thunk)(createStore)(rootReducer);


export default class Root extends Component{
    render() {
        return <Provider store={store}>
                <Router scenes={scenes}/>
            </Provider>
    }
}