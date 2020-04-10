import React, { Component } from 'react';
import slugify from 'slugify';


class Option extends Component {
    render(){
        const{itemHash, item, feature}= this.props

        // const options = this.props.features[feature].map(item => {
        // const itemHash = slugify(JSON.stringify(item));
    return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.props.selected[feature].name}
            onChange={e => this.props.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({this.props.usCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    }
}

export default Option;