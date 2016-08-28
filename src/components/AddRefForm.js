import React, { Component, PropTypes } from 'react';

// api
const characters = ["Lorelai Gilmore","Rory Gilmore","Luke Danes","Lane Kim","Michel Gerard","Emily Gilmore","Richard Gilmore","Sookie St. James","Kirk Gleason","Paris Geller","Miss Patty","Dean Forester","Logan Huntzberger","Jackson Belleville","Taylor Doose","Babette Dell","Mrs. Kim","Zack Van Gerbig","Jess Mariano","Christopher Hayden","Louise Grant","Madeline Lynn","Brian Fuller","Gypsy","Doyle McMaster","Caesar","Andrew","Morey Dell","Grant","Liz Danes","Colin McCrae","Lulu","Finn","Jason Stiles","T.J.","Gil","April Nardini","Tom","Max Medina","Glenn Babble","Tristin Dugray","Hanlin Charleston","Marty","Anna Nardini","Bill","Dave Rygalski","Mitchum Huntzberger","Lindsay Forester","Janet Billings","Drella","Tana Schrick","Nicole Leahy","Lucy","Reverend Archie Skinner","Olivia","A.K.","Brad Langford","Lorelai 'Trix' Gilmore","Rob","Rachel","Bootsy","Kyle","Mrs. O'Malley","Kyon","Bill","Henry Cho","Asher Fleming","Francie Jarvis","Honor Huntzberger","Robert Grimaldi","Rabbi David Barans","Shane","Clara Forester","Raj","Mrs. Cassini","Fred","Robert the Valet","Customer #1","Ed","Bob Merriam","Sherry Tinsdale","Alex Lesman","Rune","Sophie Bloom","Jamie","Mr. Hunter","Davey","Costumer","Harry","Dereck","Customer #2","Jamie","Jimmy","Tobin","Joe Mastoni","Straub Hayden","Mayor Harry Porter","Burt","Beau Belleville","Francine Hayden","Sy","Nick","Simon McLane","T.J.'s Brother","Terrence","Dr. Schultz","Waiter","Floyd Stiles","Customer #1","Anson","Rich Bloomenfeld","Josh","Patel Chandrasekhar","Mrs. Slutsky","Carl","Manny","Chad","Russell Bynes","Meena","Grandpa Huntzberger","Customer","Chad","Marilyn","Customer","Marty (Singer)", "Customer","Helen Thompson","Fred Larson","Customer","Customer #2","Waiter","Western Shirt Man","Young Lorelai","Fencing Instructor","Waiter","Judy Garland","Douglas Swope","Caesar","The Proprietor","Mr. Hunter","Young Christopher","Bill Borden","May","Mae West","Andrew","Carl","Customer #2","Marilyn Monroe","Waiter","John Mattern","Waiter","Bette Davis","Name Calling Woman","Chief Baker","Marjorie Rogers","Gwen Stefani","Iris Medlock","Uma Thurman","Fred Larson Jr.","Lucy","Charlie","Janet Jackson","Jim Hatlestad","Customer #1","Luke's Customer #1","Customer","Waiter","Luke's Customer #2","Friar Lawerence","Dean Forester","Stars Hollow Resident","Chad","Stars Hollow Resident","Terence","Customer", "Work Furlough Gang","Elton John", "other"];
const locations = ["Lorelai's House", "The Gilmore House", "Town Square", "Chilton", "Luke's Diner", "Kim's Antiques", "Miss Patty's School of Ballet", "Independence Inn", "Doose's Market", "Dragonfly Inn", "Weston's Bakery", "Stars Hollow High School", "Stars Hollow History Museum", "Yale", "other"];

// stylesheets
import '../stylesheets/AddRefForm.scss';


class AddRefForm extends Component {
	
	constructor() {
		super();
		this.state = {
			currScreengrab: null,
			currRefThumb: null,
		};
	}

	componentDidMount() {
		const screengrabBox = this.screengrabElement.getBoundingClientRect();
		this.screengrabUploadElement.style.top = ((screengrabBox.height/2) * -1) - 30 + "px";
		this.screengrabUploadElement.style.left= (screengrabBox.width/2) - 35 + "px";
		
		const refThumbBox = this.refThumbElement.getBoundingClientRect();
		this.refThumbUploadElement.style.top = ((refThumbBox.height/2) * -1) - 25 + "px";
		this.refThumbUploadElement.style.left= (refThumbBox.width/2) - 85 + "px";
	}

	uploadChange(e) {
		const id = e.target.id;
		const file = e.target.files[0];
		if (file.type.match('image.*')) {
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = e => {
				if (id.includes('ref')) { 
					this.setState({ currRefThumb: e.target.result });
					this.refThumbElement.src = e.target.result;
				} else if (id.includes('screengrab')) {
					this.setState({ currScreengrab: e.target.result });
					this.screengrabElement.src = e.target.result;
				}
			}
		}
	}

	fromChange(e) {
		console.log(e.target.value);
		const name = e.target.value.replace(/^\s+|\s+$|\s|\./g, '').toLowerCase();
		console.log(name);
		console.log(this.currPersonThumb);


		// check filenames for match
		// set ref URL for 'this.currPersonThum'
		// if not match, keep smiley face
	}


	render() {
		return (
			<div className="add-ref-form-wrapper">
			<form>
				<div className="rf-headline-wrapper" >
	        <div className="rf-person-thumb">
          	<img className="rf-clip-circle" src="assets/img/people/smiley.png" alt="face" ref={c => this.currPersonThumb = c}/>
	        </div>
	        <div className="rf-quote-box">
	        	<i className="rf-left-arrow fa fa-caret-left" aria-hidden="true"></i>
        		<span className="rf-ref-quote"><textarea placeholder="quote"/></span>
      		</div>
	      </div> 


				<div className="rf-ref-detail-wrapper">
					<div className="rf-time">
						<i className="fa fa-clock-o" aria-hidden="true"></i>
						<span className="rf-button-link rf-ref-marker"><input type="text" placeholder="00:00" /></span>
					</div>
					<div className="rf-screengrab">
						<img className={this.state.currScreengrab === null ? 'empty-screengrab' : ''} src="" ref={c => this.screengrabElement = c}/>
						{
							this.state.currScreengrab === null ? 
							<label htmlFor="screengrab-input" ref={c => this.screengrabUploadElement = c}><i className="fa fa-arrow-circle-up" aria-hidden="true"></i><br/>screengrab</label>
							: ''
						}
						<input type="file" id="screengrab-input" onChange={this.uploadChange.bind(this)}/>
						<div className="rf-screengrab-detail"> 
							<span className="rf-button-link from">
								<select className="rf-from-input" onChange={this.fromChange.bind(this)}>
						  		{characters.map( (c, index) => <option value={c} key={index}> {c} </option> )}
								</select>
							</span>
						  <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
							<span className="rf-button-link to">
								<select className="rf-to-input">
						  		{characters.map( (c, index) => <option value={c} key={index}> {c} </option> )}
								</select>
							</span> 
							<br/>
							<div className="rf-location">
								<i className="fa fa-at" aria-hidden="true"> </i>
								<span className="rf-button-link location" >
									<select className="rf-location-input">
										{locations.map( (l, index) => <option value={l} key={index}> {l} </option> )}
									</select>
								</span>
							</div>
						</div>
						
						<div className="rf-image-descrip">
							<textarea placeholder="scene description"/>
						</div>
					</div>

					<div className="rf-ref-detail">
						<div className="rf-ref-thumb">
							<img className={this.state.currRefThumb === null ? 'empty-refThumb' : ''} src="" ref={c => this.refThumbElement = c}/>
							{
								this.state.currRefThumb === null ? 
								<label htmlFor="ref-thumb-input" ref={c => this.refThumbUploadElement = c}><i className="fa fa-arrow-circle-up" aria-hidden="true"></i><br/>150 x 150px</label>
								: ''
							}
							<input type="file" id="ref-thumb-input" onChange={this.uploadChange.bind(this)}/>
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