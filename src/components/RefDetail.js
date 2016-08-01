import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import classNames from 'classnames';

// stylesheets
import '../stylesheets/RefDetail.scss';



class RefDetail extends Component {
	constructor() {
		super();
		this.state = {
			fromToOpen: false,
			dataViz: null
		};
	}

	fromToClick(event) {	
		// console.log(this.toElement); // testing references to elements, works!
	
		const prevSubject = this.state.dataViz;
		
		if (this.state.fromToOpen) {
			if (prevSubject != null && event.currentTarget !== this.state.dataViz) {
				prevSubject.classList.toggle('outline');
			}
			if (event.currentTarget === this.state.dataViz) {
				event.currentTarget.classList.toggle('outline');
				this.setState({
					fromToOpen: false,
				});
				return
			} else {
				// if the panel is open and we're switching to another button
				event.currentTarget.classList.toggle('outline');
				this.setState({ dataViz: event.currentTarget });
			} 
		} else { 
		// open the Panel
			event.currentTarget.classList.toggle('outline');
			this.setState({
				fromToOpen: true,
				dataViz: event.currentTarget
			});
		}
	}


	render() {
		return (
			<div className="ref-detail-wrapper">
				<div className="screengrab">
					<img src={`assets/img/screens/${this.props.reference.screenshot}`} alt="screengrab" />
					<div className="screengrab-detail"> 
						<span className="from" onClick={this.fromToClick.bind(this)} ref={(c) => this.fromElement = c}>{this.props.reference.from} </span>
					  <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
						<span className="to" onClick={this.fromToClick.bind(this)} ref={(c) => this.toElement = c}> {this.props.reference.to} </span> 
						<span><i className="fa fa-at" aria-hidden="true"> </i></span>
						<span className="location" onClick={this.fromToClick.bind(this)} ref={(c) => this.locationElement = c}>{this.props.reference.location} </span>
					</div>
					
					<Panel collapsible expanded={this.state.fromToOpen}>
					{this.state.dataViz == null ? '' : this.state.dataViz.innerHTML}
						{/* <Graph data={this.state.dataViz} /> */}
					</Panel>
					
					<p>A spritely young woman (whose name we do not yet know) sits down with Lorelai. They exchange banter and lip gloss. Are they sisters? Friends? We're about to find out.</p>
				</div>

				<div className="ref-detail">
					{/*					
					<p>Show: <span>Gilmore Girls</span></p>
					<p>Season: <span>1</span></p>
					<p>Episode: <span>1</span></p>
					<p>Date: <span>Oct 5, 2000</span></p>
					<p>Reference: <span>RuPaul</span></p> 
					<p>Time: <span>2:25</span></p>
					*/}

					<div className="ref-thumb">
						<img src="assets/img/refs/rupaul2.jpg" alt="RuPaul" />
					</div>
					<p><strong>RuPaul</strong> is a well-known drag performer.</p>
					<p>Type: <span>TV*</span></p>
					<p>Year: <span>1989-2000** </span></p>
					<a href="http://en.wikipedia.org/wiki/RuPaul">
						<span className="fa-stack fa-lg">
						  <i className="fa fa-circle fa-stack-2x"></i>
						  <i className="fa fa-wikipedia-w fa-stack-1x fa-inverse fa-fix" aria-hidden="true"></i>
						</span>
					</a>
					<a href="https://www.youtube.com/results?search_query=rupaul">
						<span className="fa-stack fa-lg">
						  <i className="fa fa-circle fa-stack-2x"></i>
						  <i className="fa fa-camera fa-stack-1x fa-inverse" aria-hidden="true"></i>
						</span>
					</a>
					<a href="https://www.google.com/search?q=rupaul&tbm=isch">
						<span className="fa-stack fa-lg">
						  <i className="fa fa-circle fa-stack-2x"></i>
						  <i className="fa fa-video-camera fa-stack-1x fa-inverse" aria-hidden="true"></i>
						</span>
					</a>
				</div> 

				<div className="detail-notes">
					<p>* Although active in other mediums, RuPaul is listed as a "TV"  because television brought his name to the masses and was most likely the way Rory would have come to know about him. 
					</p>
					<p>** RuPaul's first national exposure was in 1989 in The B-52's music video "Love Shack" (Wikipedia). This episode aired in 2000, so the reference year is listed as 1989-2000. See timeline view by clicking the year.</p>
				</div> 
			</div> 
		)
	}
}

RefDetail.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default RefDetail;