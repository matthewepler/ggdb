import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import classNames from 'classnames';

// components
import RefDetail from './RefDetail';

// styles
import '../stylesheets/Reference.scss';


class Reference extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
    };
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  renderHeader() {
    const panelClasses = classNames({
      'ref-quote' : true,
      'open' : this.state.open,
    });

  	const lineSplit = this.props.reference.quote.split(this.props.reference.ref);
  	
    const headline = (
      <div className="headline" onClick={this.handleClick.bind(this)}>
        <p className="ref-marker">{this.props.reference.marker}</p>
        <div className="person-thumb">
          <img className="clip-circle" src="assets/img/people/rorygilmore.png" alt="RuPaul" />
        </div>
        <i className="left-arrow fa fa-caret-left" aria-hidden="true"></i>
        <span className={panelClasses}>{lineSplit[0]}<strong>{this.props.reference.ref}</strong>{lineSplit[1]}</span>
      </div> 
    );

  	return (headline)
  }

  render() {
  	const header = this.renderHeader();

  	return (
      <Panel className="ref-panel" header={header} collapsible expanded={this.state.open}>
     		<RefDetail reference={this.props.reference}/>
   		</Panel>
    );
  }
}
 
Reference.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default Reference;
