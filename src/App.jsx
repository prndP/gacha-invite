import React, {Component} from 'react';
import GachaMenu from './components/GachaMenu/GachaMenu';
import Results from './components/Results/Results';
import './App.styl';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ''
        };
        this.props.loader.once('done', () => {
            this.setState({display: 'gacha'})
        });
    }
    getGachaResults(){
        this.setState({display: 'results'});
    }

    renderDisplay(){
        switch (this.state.display) {
            case 'gacha':
                return (<GachaMenu getGachaResults={(e)=>this.getGachaResults()}></GachaMenu>);
            case 'results':
                return (<Results></Results>);
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
