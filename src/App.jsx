import React, {Component} from 'react';
import GachaMenu from './components/GachaMenu/GachaMenu';
import Results from './components/Results/Results';
import './App.styl';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'gacha'
        };
    }

    getGachaResults() {
        this.setState({display: 'results'});
    }

    renderDisplay() {
        switch (this.state.display) {
            case 'gacha':
                return (
                    <GachaMenu loader={this.props.loader} getGachaResults={(e) => this.getGachaResults()}/>);
            case 'results':
                return (<Results loader={this.props.loader}/>);
            default:
                return '';
        }
    }

    render() {
        return (
            <div className="App">
                {this.renderDisplay()}
            </div>
        );
    }
}

export default App;
