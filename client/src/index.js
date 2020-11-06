import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopBanner from './TopBanner/TopBanner';
import SearchBar from './SearchBar/SearchBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <>
        <TopBanner/>
        <SearchBar/>
        {/* <App/> */}
    </>,
    document.getElementById('root'));
registerServiceWorker();
