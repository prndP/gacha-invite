import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
require.ensure(['./libs/starlight-loader/starlight-loader'], function () {
    const {StarlightLoader} = require('./libs/starlight-loader/starlight-loader');
    StarlightLoader.start();
    const App = require('./App').default;
    ReactDOM.render(
        <App loader={StarlightLoader}/>,
        document.getElementById('root')
    );
});




