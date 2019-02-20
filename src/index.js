import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Import the store from Redux. For all intents & purposes, the store IS Redux
import { createStore } from 'redux';
//Import the provider component from React-Redux so React & Redux can communicate through "connect"
import { Provider } from 'react-redux';
//Root Reducer to give to the store
import reducers from './reducers/index';

/*Make a store for Redux to use:
Pass it reducers, which is the export of the rootReducer file.
The rootReducer is just all the little reducers returned*/
const theStore = createStore(reducers);

/*Provider is the component that makes connect work (connect is inside of the containers)
It takes a prop of store, which is the reduxStore.
The redux store was made by createStore and giving it the rootReducer*/

ReactDOM.render(
    //What
    <Provider store={theStore}>
        <App />
    </Provider>,
    //Where
    document.getElementById('root')
);