import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import Feature from '../Feature/Feature';



class Feutures extends Component {
    render() {
        const {updateFeature, usCurrencyFormat}=this.props

        return Object.keys(this.props.features).map((feature, idx) => {
            
          const featureHash = feature + '-' + idx;
          
          return (
            <Feature 
            featureHash={featureHash}
             feature={feature}
             options={this.props.features[feature]}
             usCurrencyFormat= {usCurrencyFormat}
             updateFeature={updateFeature} 
             selected= {this.props.selected}
             />
          );
        });
    }
}

export default Feutures;