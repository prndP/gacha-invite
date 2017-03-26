import React, {Component} from 'react';
import drawVideo from '../../assets/ssr_drawn.mp4';
import './Results.styl';

class Results extends Component {
    render() {
        return (
            <div className="Results">
                <video autoPlay="true">
                    Video not supported
                    <source src={drawVideo} type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default Results;
