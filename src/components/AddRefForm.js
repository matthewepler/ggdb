import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

// components
import { Button, Col, Collapse, ControlLabel, Form, FormControl, FormGroup, Glyphicon, HelpBlock, OverlayTrigger, Tooltip } from 'react-bootstrap';

// stylesheets
import '../stylesheets/AddRefForm.scss';


class AddRefForm extends Component {
	
	constructor() {
		super();
		this.state = {
			currScreengrab: null,
		};
	}

	screengrabChange(e) {
		const file = e.target.files[0];
		if (file.type.match('image.*')) {
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = e => {
				this.setState({ currScreengrab: e.target.result });
				this.screengrabElement.src = e.target.result;
			}
		}
	}

	displayPicture(result) {
		
	}



	render() {
		const formClasses = classNames({
      'empty-img' : this.state.currScreengrab === null,
    });

		return (
			<div className="add-ref-form-wrapper">
			<form>
				<div className="rf-headline-wrapper" >
	        <p className="rf-ref-marker"><input type="text" placeholder="00:00"/></p>
	        <div className="rf-person-thumb">
	          <img className="rf-clip-circle" src="assets/img/people/smiley.png" alt="face" />
	        </div>
	        <i className="rf-left-arrow fa fa-caret-left" aria-hidden="true"></i>
	        <span className="rf-ref-quote"><textarea placeholder="quote"/></span>
	      </div> 


				<div className="rf-ref-detail-wrapper">
					<div className="rf-screengrab">
						<img className={formClasses} src="" ref={c => this.screengrabElement = c}/>
						{
							this.state.currScreengrab === null ? 
							<label htmlFor="screengrab-input"><i className="fa fa-arrow-circle-up" aria-hidden="true"></i><br/>screengrab</label>
							: ''
						}
						<input type="file" id="screengrab-input" onChange={this.screengrabChange.bind(this)}/>

						<div className="rf-screengrab-detail"> 
							<span className="rf-button-link from">from</span>
						  <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
							<span className="rf-button-link to">to</span> 
							<span><i className="fa fa-at" aria-hidden="true"></i></span>
							<span className="rf-button-link location" >location</span>
						</div>
						
						<div className="rf-image-descrip">
							<p>image description</p>
						</div>
					</div>

					<div className="rf-ref-detail">
						<div className="rf-ref-thumb">
							<img src="assets/img/people/smiley.png" alt="ref image" />
						</div>
						<div className="rf-ref-items">
							<div className="rf-ref-descrip">
								<span><p><span className="rf-button-link ref-descrip-strong">reference</span>is a...</p></span>
							</div>
							<div className="rf-ref-tags">
								<ul>
									<li className="rf-button-link">category</li>
									<li className="rf-button-link">year</li> 
									<li><i className="rf-button-link fa fa-wikipedia-w" aria-hidden="true"></i></li>
									<li><i className="rf-button-link fa fa-camera" aria-hidden="true"></i></li>
									<li><i className="rf-button-link fa fa-video-camera" aria-hidden="true"></i></li>
								</ul>

								<div className="detail-notes">
									notes
								</div> 	
							</div>
						</div>
					</div> 
				</div> 
				<input className="submit-button" type="submit" value="Submit" />
			</form>
			</div> 
		)
	}
}


export default AddRefForm;