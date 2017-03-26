import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Modal.styl';

function FirstChild(props) {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
}

class Modal extends Component {

    wrapTransition(node) {
        if (this.props.transition) {
            return (<ReactCSSTransitionGroup
                    transitionName={this.props.transition}
                    component={FirstChild}
                    transitionEnter={false}
                    transitionLeave={false}
                    transitionAppear={true}
                    transitionAppearTimeout={200}
                >{node}</ReactCSSTransitionGroup>
            )
        }
        return node;
    }

    render() {
        return this.wrapTransition(
            <div className={`Modal ${this.props.className}`}>{this.props.children}</div>
        );
    }
}

export default Modal;
