import React, {Component} from 'react';
import './PillLabel.styl';

class PillLabel extends Component {
    render() {
        return (
            <div className="LimitedContainer">
                <div className={`${this.props.className} LimitedBox`}>{this.props.pillText}</div>
                <div className="LimitedLabel">{this.props.children}</div>
            </div>
        );
    }
}

PillLabel.defaultProps = {
    pillText: '',
    className: ''
};

export default PillLabel;
