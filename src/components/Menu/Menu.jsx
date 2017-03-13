import React, {Component} from 'react';
import CogContainer from '../CogContainer/CogContainer';
import Modal from '../Modal/Modal';
import menuBgm from './bgm_gacha_menu.mp3';
import './Menu.styl';
import SSButton from '../SSButton/SSButton';
const GachaImage = require('../../assets/gachabanner.jpg');

class Menu extends Component {
    render() {
        return (
            <div>
                <audio autoPlay="true" loop="true">
                    Audio not supported
                    <source src={menuBgm} type="audio/mp3"/>
                </audio>
                <CogContainer>
                    <div className="VerticalCenter">
                        <Modal className="GachaModal" transition='Modal-Slide'>
                            <div className="GachaLeft">
                                <div className="LimitedContainer">
                                    <div className="LimitedBox">RSVP By</div>
                                    <div className="LimitedLabel">06/24 23:59</div>
                                </div>
                                <div className="GachaImageContainer">
                                    <img className="GachaImage" src={GachaImage} role="presentation"/>
                                    <SSButton className="DetailsButton Pink">
                                        About Us
                                    </SSButton>
                                </div>
                            </div>
                            <div className="GachaRight">
                                <h2>M@GIC WEDDING STORY!</h2>
                                <p>
                                    Li popped the question! and now we would like to ask you to save the date for
                                    our wedding! Li and
                                    Andrea are having a beautiful daytime wedding on 9/24/17 in Belleville, NJ.
                                    Please pencil in our
                                    date so that you can attend! There will be a ceremony, reception, and after
                                    party!
                                </p>
                                <div className="TicketContainer">
                                    <SSButton className="GachaPullButton Pink with-bg">Save The Date</SSButton>
                                    <div className="LimitedContainer">
                                        <div className="LimitedBox">Save The Date Tickets</div>
                                        <div className="LimitedLabel">
                                            <span className="Number">1</span> ticket
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </CogContainer>
            </div>
        );
    }
}

export default Menu;
