import React, { Component } from 'react';
import Selected from '../Selected/Selected';
import Total from '../Total/Total';
import './Summary.css'



class Summary extends Component {
    render() {
      return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Selected
            usCurrencyFormat={this.props.usCurrencyFormat} 
            selected={this.props.selected} 
            />
            
            <Total
            usCurrencyFormat={this.props.usCurrencyFormat} 
            selected={this.props.selected} 
            />
        </section>
      );
    }
  }

export default Summary;