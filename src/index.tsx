/*
 * @Author: Kanata You 
 * @Date: 2021-01-14 15:13:13 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-01-14 19:03:46
 */

import React from 'react';
import { render } from 'react-dom';
import Demo from './demo';
import "./App.css";


const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                This is a demo.
            </header>
            <Demo />    
        </div>
    );
};


render(<App />, document.querySelector('#root'));
