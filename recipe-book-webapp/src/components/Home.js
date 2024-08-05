import React, { Component } from 'react';
import Header from './Header';

export default class Home extends Component {
  render() {
    return (
      <Header title="Delicious Recipes" recipes={this.props.recipes} />
    );
  }
}
