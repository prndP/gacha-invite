import './BackgroundAnimation';
import {lib, images, createjs, spritesheet as ss} from '../../libs/AnimateCommon';
import React, {Component} from 'react';
import './CogContainer.css';

class CogContainer extends Component {
	constructor(props) {
		super(props);
		this.containerWidth = 1920;
		this.containerHeight = 1080;

		this.containerStyle = {
			backgroundColor: 'rgb(255, 255, 255)', width: this.containerWidth, height: this.containerHeight
		};

		this.canvasStyle = {
			backgroundColor: 'rgb(255, 255, 255)', width: this.containerWidth, height: this.containerHeight
		}

		this.domOverlayStyle = {
			pointerEvents: 'none',
			overflow: 'hidden',
			width: this.containerWidth,
			height: this.containerHeight,
			position: 'absolute',
			left: 0,
			top: 0,
			display: 'block'
		}
	}

	componentDidMount() {
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", this.handleFileLoad.bind(this));
		loader.addEventListener("complete", this.handleComplete.bind(this));
		loader.loadManifest(lib.properties.manifest);
	}

	handleFileLoad(evt) {
		if (evt.item.type === "image") {
			images[evt.item.id] = evt.result;
		}
	}

	handleComplete(evt) {
		const canvas = this.canvas;
		const anim_container = this.anim_container;
		const dom_overlay_container = this.dom_overlay_container;

		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		const queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		for (let i = 0; i < ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet({
				"images": [queue.getResult(ssMetadata[i].name)],
				"frames": ssMetadata[i].frames
			})
		}
		lib.exportRoot = new lib.gacha();
		const stage = new createjs.Stage(this.canvas);
		stage.addChild(lib.exportRoot);
		//Registers the "tick" event listener.
		const fnStartAnimation = function () {
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
		//Code to support hidpi screens and responsive scaling.
		function makeResponsive(isResp, respDim, isScale, scaleType) {
			var lastW, lastH, lastS = 1;
			var resizeCanvas = () => {
				var w = lib.properties.width, h = lib.properties.height;
				var iw = window.innerWidth, ih = window.innerHeight;
				var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
				if (isResp) {
					if ((respDim === 'width' && lastW === iw) || (respDim === 'height' && lastH === ih)) {
						sRatio = lastS;
					}
					else if (!isScale) {
						if (iw < w || ih < h)
							sRatio = Math.min(xRatio, yRatio);
					}
					else if (scaleType === 1) {
						sRatio = Math.min(xRatio, yRatio);
					}
					else if (scaleType === 2) {
						sRatio = Math.max(xRatio, yRatio);
					}
				}
				canvas.width = w * pRatio * sRatio;
				canvas.height = h * pRatio * sRatio;
				canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
				canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
				stage.scaleX = pRatio * sRatio;
				stage.scaleY = pRatio * sRatio;
				lastW = iw;
				lastH = ih;
				lastS = sRatio;
			}
			window.addEventListener('resize', resizeCanvas);
			resizeCanvas();
		}

		makeResponsive(true, 'both', true, 1);
		fnStartAnimation();
	}


	render() {
		return (
				<div className="CogContainer-AnimationContainer" ref={(thisRef) => {
					this.anim_container = thisRef
				}} style={this.containerStyle}>
					<canvas width={this.canvasWidth} height={this.canvasHeight} ref={(thisRef) => {
						this.canvas = thisRef
					}} style={this.canvasStyle}></canvas>
					<div ref={(thisRef) => {
						this.dom_overlay_container = thisRef
					}} style={this.domOverlayStyle}>
						{this.props.children}
					</div>
				</div>
		);
	}
}

export default CogContainer;
