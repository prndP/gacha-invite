/**
 * Portions of this code are copyright and licensed under terms of the  MIT license
 * Copyright 2016, spring-raining, https://github.com/spring-raining/SSRgen
 */
import React, {Component} from 'react';
import './CharacterNameFrame.styl';

class CharacterNameFrame extends Component {
    static getFillColors() {
        return {
            cute: ['#ff7abd', '#ff1a8c'],
            cool: ['#59b4de', '#2180de'],
            passion: ['#ffaa00', '#fe7700'],
        };
    }

    render() {
        const classNames = ['character-frame', this.props.type];
        const fillColors = CharacterNameFrame.getFillColors()[this.props.type];
        if (this.props.standBy) classNames.push('stand-by');
        return (
            <div className={classNames.join(' ')}>
                <svg width="100%" height="100%">
                    <defs>
                        <linearGradient id="grad" gradientTransform="rotate(90)">
                            <stop offset="0" stopColor={fillColors[0]}/>
                            <stop offset="1" stopColor={fillColors[1]}/>
                        </linearGradient>
                        <filter id="filt">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                            <feOffset dx="4" dy="4"/>
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.5"/>
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <g stroke="white" strokeWidth="8" fontFamily="sans-serif" fontWeight="bold"
                       fill="white" filter="url(#filt)" strokeLinejoin="round">
                        <text fontSize="42px" x="320px" y="85px" textAnchor="left">[{this.props.title}]</text>
                        <text fontSize="90px" x="400px" y="190px" textAnchor="middle">{this.props.name}</text>
                    </g>
                    <g fill="url(#grad)" fontFamily="sans-serif" fontWeight="bold">
                        <text fontSize="42px" x="320px" y="85px" textAnchor="left">[{this.props.title}]</text>
                        <text fontSize="90px" x="400px" y="190px" textAnchor="middle">{this.props.name}</text>
                    </g>
                </svg>
            </div>
        );
    }
}

export default CharacterNameFrame;