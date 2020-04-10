
import React, { Component } from 'react';
import Summary from '../Selected/Selected';
import Total from '../Total/Total';


class Selected extends Component {
    render() {
      return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary
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

export default Selected;