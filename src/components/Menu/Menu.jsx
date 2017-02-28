import React, {Component} from 'react';
import CogContainer from '../CogContainer/CogContainer';
import menuBgm from './bgm_gacha_menu.mp3';
import './Menu.css';

class Menu extends Component {
	render() {
		return (
				<div>
					<audio autoPlay="true" loop="true">
						Audio not supported
						<source src={menuBgm} type="audio/mp3"></source>
					</audio>
					<CogContainer>
						<div className="VerticalCenter">
							<div className="GachaModal">
								<div className="LimitedBox">Limited: 06/24</div>

							</div>
						</div>
					</CogContainer>
				</div>
		);
	}
}

export default Menu;
