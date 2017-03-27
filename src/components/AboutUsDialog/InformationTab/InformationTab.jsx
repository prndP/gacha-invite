import React, {Component} from 'react';
import PillLabel from "../../PillLabel/PillLabel";
import Moment from 'moment';
import './InformationTab.styl';

// Assets
const ssrLogo = require('../../../assets/ssrlogo.png');
const passionSvg = require('../../../assets/passion.svg');
const aboutUs2d = require('../../../assets/aboutUs2d.gif');
const aboutUs3d = require('../../../assets/aboutUs3d.jpg');
const eventNameLogo = require('../../../assets/eventNameLogo1.svg');
const theDate = Moment('20170924', 'YYYYMMDD');

class InformationTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Moment()
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Moment()
        })
    }

    render() {
        return (
            <div>
                <div className="Divider">
                    <div className="TypeLabel">
                        <img className="TypeLogo" src={passionSvg} alt="Passion"/>
                        <img className="TypeRarity" src={ssrLogo} alt="SSR"/>
                    </div>
                    <div className="DividerTitle"><img className="EventNameLogo" src={eventNameLogo}
                                                       alt="M@GIC Wedding Story"/></div>
                </div>
                <div className="ModalPane">
                    <div className="ModalLeft">
                        <img className="Main3d" src={aboutUs3d} role="presentation"/>
                        <img className="Main2d" src={aboutUs2d} role="presentation"/>
                    </div>
                    <div className="ModalRight AboutUsDetails">
                        <div className="ModalPane">
                            <div className="GridRow">
                                <div className="GridCol50">
                                    <PillLabel className="Green"
                                               pillText="Date">{theDate.format('MM/DD/YYYY')}</PillLabel>
                                </div>
                                <div className="GridCol50">
                                    <PillLabel className="Red" pillText="That's in">
                                        <span className="Number">{theDate.diff(this.state.date, 'days')} </span> days
                                    </PillLabel>
                                </div>
                            </div>
                            <div className="GridRow">
                                <div className="GridCol50">
                                    <PillLabel className="Blue" pillText="Ceremony">11:30 am</PillLabel>
                                </div>
                                <div className="GridCol50"><PillLabel className="Orange" pillText="Reception">
                                    12:30 pm - 5:00 pm</PillLabel>
                                </div>
                            </div>
                            <div className="GridRow">
                                <div className="GridCol100">
                                    <PillLabel pillText="Location">Belleville, NJ</PillLabel>
                                </div>
                            </div>
                            <div className="GridRow">
                                <div className="GridCol100">
                                    <PillLabel pillText="Our Date Meaning">
                                        <div className="NewLine">9/24 is the sum of our birthdays!</div>
                                        <div className="NewLine">Andrea's is 9/24 and Li's is 3/24</div>
                                        We hope that you can join us for our big day!
                                    </PillLabel>
                                </div>
                            </div>
                            <div className="GridRow">
                                <div className="GridCol100">
                                    <PillLabel pillText="RSVP">
                                        <div className="NewLine">If you know you would be able to attend,</div>
                                        please visit
                                    </PillLabel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InformationTab;
