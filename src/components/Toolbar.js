import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

// styles
import '../stylesheets/Toolbar.scss';


class Toolbar extends Component {
	handleClick(event) {
		alert("clicked");
	}

	render() {
		return (
			<ButtonToolbar>
      	<Button className="addButton" bsSize="large" onClick={this.props.formHandler}>+</Button>
    	</ButtonToolbar>
		);
	}
}

Toolbar.propTypes = {
  formHandler: PropTypes.func.isRequired, // calls a function in App to open the addRefForm component.
};

export default Toolbar;