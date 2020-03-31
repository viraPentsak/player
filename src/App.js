import React from 'react';
import {Provider} from 'react-redux'
import store from './store';

import Player from "./components/Player/Player";
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Player/>
            </div>
        </Provider>
    );
}

export default App;
