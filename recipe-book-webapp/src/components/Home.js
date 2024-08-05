import React, { Component } from 'react';
import Header from './Header';
import "../../src/components/test.css"
export default class Home extends Component {
  render() {
    return (
      <div className='main'><Header title="Delicious Recipes" recipes={this.props.recipes} /></div>
    );
  }
}
