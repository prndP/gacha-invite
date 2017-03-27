import React, {Component} from 'react';
import Dialog from '../Dialog/Dialog';
import TabBar from "../TabBar/TabBar";
import './AboutUsDialog.styl';
import InformationTab from "./InformationTab/InformationTab";

class AboutUsDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
        this.tabs = [
            {key: 'info', text: 'Information', onClick: () => this.setState({activeTab: 0})},
            {key: 'wp', text: 'Wedding Party', onClick: () => this.setState({activeTab: 1})}
        ];
    }

    renderTabs() {
        switch (this.state.activeTab) {
            case 0:
                return (<InformationTab/>);
            case 1:
                return null;
            default:
                return null;
        }
    }

    render() {
        return (
            <Dialog className="Large" headerText="About Us" isOpen={this.props.isOpen}
                    dismiss={this.props.dismiss}>
                <TabBar tabs={this.tabs} active={this.state.activeTab}/>
                {this.renderTabs()}
            </Dialog>
        );
    }

}

export default AboutUsDialog;
