import './index.css';
import {StarlightLoader} from './libs/starlight-loader/starlight-loader';
StarlightLoader.start();

require.ensure([], function () {
    const React = require('react');
    const ReactDOM = require('react-dom');

    const App = require('./App').default;
    ReactDOM.render(
        <App loader={StarlightLoader}/>,
        document.getElementById('root')
    );
});




