import React, {Component} from 'react';
import './SSButton.styl';

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
				onClick={this.props.onClick}
		>
			{this.props.children}
		</div>);
	}
}

MenuButton.defaultProps = {
	onClick: () => {}
}

export default MenuButton;
