import React, {Component} from 'react';
import Modal from '../Modal/Modal';
import './Dialog.styl';

import SSButton from '../SSButton/SSButton';
const GridBoxes = require('../../assets/grid.svg');

class Dialog extends Component {
    render() {
        return (
            <Modal className={`Dialog ${this.props.className}`} transition='Modal-Pop'>
                <div className="Header"><img role="presentation" src={GridBoxes}/><span>{this.props.headerText}</span></div>
                <div className="Body">
                    {this.props.children}
                </div>
                <div className="Footer">
                    {(this.props.dismiss) ? (
                            <SSButton className="CloseButton White" onClick={this.props.dismiss}>Close</SSButton>) : ''}
                </div>
            </Modal>
        );
    }
}

Dialog.defaultProps = {
    isOpen: true,
    dismiss: undefined
};

export default Dialog;
