import React, {Component} from 'react';
import drawVideo from '../../assets/ssr_drawn.mp4';
import './Results.styl';
import MoviePlayer from "../MoviePlayer/MoviePlayer";
const drawSignature = require('../../assets/drawSignature.png');
const myImage = require('../../assets/myssr.jpg');

const image = new Image();
image.src = drawSignature;

const charImage = new Image();
charImage.src = myImage;

class Results extends Component {
    render() {
        return (
            <div className="VerticalCenter absolute">
                <MoviePlayer movie={drawVideo} image={image} characterImage={charImage} type="passion"/>
            </div>

        );
    }
}

export default Results;
