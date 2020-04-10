import React, { Component } from 'react';
import Option from './Option';
import slugify from 'slugify';

class Feature extends Component {
    render(){
        const{featureHash, feature, updateFeature, usCurrencyFormat}= this.props
        const options = this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item));
          return (
            <Option itemHash= {itemHash}
          item= {item}
          feature= {feature}
          usCurrencyFormat= {usCurrencyFormat}
          selected= {this.props.selected}
          updateFeature={updateFeature} 
            />
          );
        });
        return (
    <fieldset className="feature" key={featureHash}>
    <legend className="feature__name">
      <h3>{feature}</h3>
    </legend>
    {options}
  </fieldset>
        )
    }
}
export default Feature;
