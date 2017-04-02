/**
 * Portions of this code are copyright and licensed under terms of the  MIT license
 * Copyright 2016, spring-raining, https://github.com/spring-raining/SSRgen
 */

import React from 'react';
import CharacterNameFrame from '../CharacterNameFrame/CharacterNameFrame';
import ResponsiveCanvasListener from '../../utils/ResponsiveCanvasListener';

import './MoviePlayer.styl';

export default class MoviePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameStandBy: true
        };
    }

    easeAlpha(time, inTime, outTime, easeTime) {
        if (time < inTime || time > outTime) return 0;
        let alpha = 1;
        if (time < inTime + easeTime) alpha = (time - inTime) / easeTime;
        if (time > outTime - easeTime) alpha = (outTime - time) / easeTime;
        return alpha;
    }

    drawSign(x, y, alpha = 1, scale = 1, compositeMode) {
        const {width, height} = this.refs.canvas;
        if (alpha <= 0) return;
        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        if (compositeMode) this.ctx.globalCompositeOperation = compositeMode;
        this.ctx.drawImage(this.props.image, x, y, width * scale, height * scale);
        this.ctx.restore();
    }

    drawCharacter(time) {
        const {width, height} = this.refs.canvas;
        const alpha = this.easeAlpha(time, 7, 20, 0);
        const image = this.props.characterImage;
        if (!image || alpha <= 0) return;
        const iw = image.width;
        const ih = image.height;
        const scale = (width / height > iw / ih) ? (width / iw) : (height / ih);
        const x = (width - iw * scale) / 2;
        const y = (height - ih * scale) / 2;
        this.ctx.drawImage(image, x, y, iw * scale, ih * scale);
    }

    draw(forceDraw) {
        if (!this.refs.video) return;
        if (!this.refs.video.ended) {
            window.requestAnimationFrame(this.draw.bind(this));
        }
        if (this.refs.video.paused && !forceDraw) return;
        const {width, height} = this.refs.canvas;
        const time = this.refs.video.currentTime;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.globalCompositeOperation = 'lighter';
        // main video
        this.ctx.drawImage(this.refs.video, 0, 0, width, height);
        // main sign, displayed largely on center
        this.drawSign(0, 0, this.easeAlpha(time, 4.5, 7.1, 0.7), 1);
        // pasted character image
        this.drawCharacter(time);
        // small sign, displayed with the character
        this.drawSign(0, 200, this.easeAlpha(time, 10, 20, 1), 0.5, 'source-over');
        // black sign, displayed for a moment on the whiteout screen
        this.drawSign(0, 0, this.easeAlpha(time, 6.5, 7, 0.5), 1, 'difference');
        const nameStandBy = time < 10;
        if (this.state.nameStandBy !== nameStandBy) this.setState({nameStandBy});
    }

    componentDidMount() {
        this.ctx = this.refs.canvas.getContext('2d');
        this.canvasListener = new ResponsiveCanvasListener(this.refs.canvas, this.refs.videoContainer, () => {
            this.draw(true);
        });
        window.requestAnimationFrame(this.draw.bind(this));
    }

    componentWillUnmount() {
        this.canvasListener.destroy();
    }

    render() {
        return (
            <div className="sign-video-container" ref="videoContainer">
                <canvas width="720" height="405" ref="canvas"/>
                <video autoPlay="true" ref="video">
                    Video not supported
                    <source src={this.props.movie} type="video/mp4"/>
                </video>
                <CharacterNameFrame title={this.props.characterTitle}
                                    name={this.props.characterName}
                                    type={this.props.type}
                                    standBy={this.state.nameStandBy}/>
            </div>
        );
    }
}

MoviePlayer.propTypes = {
    image: React.PropTypes.instanceOf(Image).isRequired,
    characterImage: React.PropTypes.instanceOf(Image).isRequired,
    characterName: React.PropTypes.string,
    characterTitle: React.PropTypes.string,
    type: React.PropTypes.string,
    movie: React.PropTypes.string
};
