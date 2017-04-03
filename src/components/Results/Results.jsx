import React, {Component} from 'react';
import './Results.styl';
import MoviePlayer from '../MoviePlayer/MoviePlayer';
import {preloadAssetBlob} from '../../utils/loaderUtils';

const drawVideo = require('../../assets/ssr_drawn.mp4');
const drawSignature = require('../../assets/drawSignature.png');
const myImage = require('../../assets/myssr.jpg');

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false}
    }

    componentWillMount() {
        this.props.loader.restart();
        const image = new Image();
        image.src = drawSignature;
        const charImage = new Image();
        charImage.src = myImage;
        preloadAssetBlob(drawVideo, (data) => {
            this.setState({drawVideo: data})
        });
        this.props.loader.once('done', () => {
            this.setState({loaded: true, image: image, charImage: charImage});
        });
    }

    render() {
        return this.state.loaded ? (
            <div className="VerticalCenter absolute">
                <MoviePlayer
                    movie={this.state.drawVideo}
                    image={this.state.image}
                    characterImage={this.state.charImage}
                    characterName="MIRANDA THE CAT"
                    characterTitle="MY FAVORITE"
                    type="passion"/>
            </div>

        ) : null;
    }
}

export default Results;
