import React, {Component} from 'react';
import Menu from './components/Menu/Menu';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ''
        };
        this.props.loader.once('done', () => {
            this.setState({display: 'gacha'})
        })
    }

    render() {
        return (
            <div className="App">
                {this.state.display === 'gacha' ? (<Menu></Menu>) : ''}
            </div>
        );
    }
}

export default App;
