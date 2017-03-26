import React, {Component} from 'react';
import './TabBar.styl';

class TabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    renderTabs() {
        return this.props.tabs.map((tab, index) => {
            return (<div key={tab.key} className={`Tab ${index === this.props.active ? 'active' : ''}`}
                         onClick={tab.onClick}>{tab.text}</div>)
        })
    }

    render() {
        if (this.props.tabs.length) {
            return (
                <div className="TabBar">
                    {this.renderTabs()}
                </div>
            );
        }
        return null
    }
}

TabBar.defaultProps = {
    tabs: [],
    active: 0
};

export default TabBar;