import React, {Component} from 'react';
import './SSButton.css';

class MenuButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		};
	}

	render() {
		return (<div
				className={`SSButton ${this.props.className} ${(this.state.active) ? 'active' : ''}`}
				onMouseDown={() => this.setState({active: true})}
				onMouseUp={() => this.setState({active: false})}
				onMouseOut={() => this.setState({active: false})}
		>
			{this.props.children}
		</div>);
	}
}

export default MenuButton;
