import React, { Component, PropTypes } from 'react';

// components
import { Button, Col, Collapse, ControlLabel, Form, FormControl, FormGroup, Glyphicon, HelpBlock, OverlayTrigger, Tooltip } from 'react-bootstrap';

// stylesheets
import '../stylesheets/AddRefForm.scss';


class AddRefForm extends Component {
	
	constructor() {
		super();
		this.state = {};
	}

	handleChange(e) {
		// setState can take a 2nd argument which is a callback function
		// could use this to validate and update React Bootstrap validation and styling?
		
		this.setState({ [e.target.name] : e.target.value });
		
		// === getting bold to show up as you entered the ref quote === 
		// if (e.target.name === 'quote' && e.target.value.includes(this.state.ref)) {
		// 	const span = document.getElementById('quoteBack');
		// 	const index = e.target.value.indexOf(this.state.ref);
		// 	const replacementString = e.target.value.substr(0,index) + '<strong>' + this.state.ref + '</strong>' + e.target.value.substr(index+this.state.ref.length);
		// 	span.innerHTML = replacementString;

		// 	span.style.zIndex = 1;
		// 	e.target.style.zIndex = 2;
		// 	console.log('input top = ' + e.target.getBoundingClientRect().top);
		// 	console.log('span top = ' + span.getBoundingClientRect().top);
		// 	span.style.marginTop = "-43px";
		// }
	}


	// UX: input the reference, then the quote. As you type the quote, it finds the reference and bolds it for you
	// UX/UI: carosel input, one at a time, with progress bar at bottom
	render() {
		return (
			<Collapse in={this.props.formOpen}>
				<Form horizontal className="refInputForm">
					
					{/* NOTE: custom autoforms were working at commit [exp 8c21311] but decided to input manually for speed of dev}
					{/* Ref */}
					<FormGroup controlId="refInput">
						<Col componentClass={ControlLabel} sm={2}>Reference</Col>
						<Col sm={10}>
							<FormControl 
								componentClass="input"
								type="text" 
								name="ref"
								onChange={this.handleChange.bind(this)}>
							</FormControl>
							<span className="tool-tip">
							<OverlayTrigger placement="left" trigger="click" overlay={<Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
					      <Button bsSize="small" className="tool-tip-icon"><Glyphicon glyph="question-sign" /></Button>
					    </OverlayTrigger>
					    </span>
						</Col>
					</FormGroup>

					{/* Quote */}
					<FormGroup controlId="quoteInput">
						<Col componentClass={ControlLabel} sm={2}>Quote</Col>
						<Col sm={10}>
							<FormControl 
								componentClass="input"
								type="text" 
								name="quote"
								onChange={this.handleChange.bind(this)}>
							</FormControl>
							<HelpBlock>example = "I'm sorry. I lost my Macy Gray CD and I need caffeine." </HelpBlock>
							<span id="quoteBack"></span>
						</Col>
					</FormGroup>

				{/* Season */}
				<FormGroup controlId="seasonInput">
						<Col componentClass={ControlLabel} sm={2}>Season</Col>
						<Col sm={10}>
							<FormControl 
								componentClass="select"
								type="" 
								name="season"
								onChange={this.handleChange.bind(this)}>
									{[1,2,3,4,5,6,7].map((num) => {
										return <option value={num} key={num}>{num}</option>
									})}
							</FormControl>
						</Col>
					</FormGroup>

				{/* Episode */}
				<FormGroup controlId="episodeInput">
						<Col componentClass={ControlLabel} sm={2}>Episode</Col>
						<Col sm={10}>
							<FormControl 
								componentClass="select"
								type="" 
								name="episode"
								onChange={this.handleChange.bind(this)}>
									{[...Array(22).keys()].map((num) => {
										const actualNum = num + 1;
										return <option value={actualNum} key={actualNum}>{actualNum}</option>
									})}
							</FormControl>
						</Col>
					</FormGroup>

				{/* Time */}
				<FormGroup controlId="timeInput">
						<Col componentClass={ControlLabel} sm={2}>Time</Col>
						<Col sm={10}>
							<FormControl 
								componentClass="input"
								type="" 
								name="time"
								onChange={this.handleChange.bind(this)}>
							</FormControl>
							<HelpBlock>example = 01:22. Minutes must be two numbers. Seconds must be two numbers. </HelpBlock>
						</Col>
					</FormGroup>

				{/* Screenshot */}
				{/* From */}
				{/* To */}
				{/* Location */}
				{/* Category */}
				{/* Image */}
				{/* Media */}
				{/* Year */}
				{/* Info */}
				{/* Note */}

				</Form>
			</Collapse>
		)
	}
}


AddRefForm.propTypes = {
  formOpen: PropTypes.bool.isRequired,
};

export default AddRefForm;