import React, {Component} from 'react';
import drawVideo from '../../assets/ssr_drawn.mp4';
import './Results.styl';
import MoviePlayer from "../MoviePlayer/MoviePlayer";

class Results extends Component {
    render() {
        return (
            <MoviePlayer movie={drawVideo} image="" settings="" onSettingsChange=""/>
        );
    }
}

export default Results;
