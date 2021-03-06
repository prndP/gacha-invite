import React, {Component} from 'react';
import CogContainer from '../CogContainer/CogContainer';
import AboutUsDialog from '../AboutUsDialog/AboutUsDialog';
import Modal from '../Modal/Modal';
import SSButton from '../SSButton/SSButton';
import PillLabel from "../PillLabel/PillLabel";
import './GachaMenu.styl';

// Assets
const menuBgm = require('./bgm_gacha_menu.mp3');
const GachaImage = require('../../assets/gachabanner.jpg');
const eventNameLogo = require('../../assets/eventNameLogo2.svg');

class GachaMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            showDialog: null
        };
    }

    componentWillMount() {
        require.ensure(['../../assets/gachabanner.jpg', '../../assets/eventNameLogo2.svg'], () => {
            let preLoadGachaImage = new Image();
            preLoadGachaImage.src = GachaImage;
            let preLoadEventNameLogo = new Image();
            preLoadEventNameLogo.src = eventNameLogo;
            this.props.loader.once('done', () => {
                this.setState({loaded: true})
            });
        });
    }

    renderDialog() {
        switch (this.state.showDialog) {
            case 'aboutUs':
                return (
                    <AboutUsDialog isOpen={this.state.showDialog === 'aboutUs'}
                                   dismiss={(e) => this.setState({showDialog: false})}/>);
            default:
                return;
        }
    }

    renderModal() {
        this.bgm.play();
        return (
            <Modal className="GachaModal" transition='Modal-Slide'>
                <div className="ModalLeft">
                    <PillLabel pillText="RSVP By">06/24 23:59</PillLabel>
                    <div className="GachaImageContainer">
                        <img className="GachaImage" src={GachaImage} role="presentation"/>
                        <SSButton className="DetailsButton Pink"
                                  onClick={(e) => this.setState({showDialog: 'aboutUs'})}>
                            About Us
                        </SSButton>
                    </div>
                </div>
                <div className="ModalRight">
                    <p>
                        <img className="EventNameLogo" src={eventNameLogo} alt="M@GIC WEDDING STORY!"/>
                    </p>
                    <p>
                        Li popped the question! and now we would like to ask you to save the date for
                        our wedding! Li and
                        Andrea are having a beautiful daytime wedding on 9/24/17 in Belleville, NJ.
                        Please pencil in our
                        date so that you can attend! There will be a ceremony, reception, and after
                        party!
                    </p>
                    <div className="TicketContainer">
                        <SSButton className="GachaPullButton Pink with-bg"
                                  onClick={this.props.getGachaResults}>Save The Date</SSButton>
                        <PillLabel pillText="Save The Date Tickets">
                            <span className="Number">1</span> ticket
                        </PillLabel>
                    </div>
                </div>
            </Modal>
        )
    }

    render() {
        return (
            <div>
                <audio loop="true" preload="auto" ref={(thisRef) => {
                    this.bgm = thisRef
                }}>
                    Audio not supported
                    <source src={menuBgm} type="audio/mp3"/>
                </audio>
                {this.state.loaded ? (
                    <CogContainer>
                        <div className="VerticalCenter">
                            {this.state.loaded ? this.renderModal() : null}
                            {this.renderDialog()}
                        </div>
                    </CogContainer>
                ) : null}
            </div>
        )
    }
}

GachaMenu.defaultProps = {
    getGachaResults: () => {
    }
};

export default GachaMenu;
