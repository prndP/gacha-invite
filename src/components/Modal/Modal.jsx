import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component {
	render() {
		return (<div className={`Modal ${this.props.className}`}>{this.props.children}</div>);
	}
}

export default Modal;
