import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './stateDispatch';

class Home extends Component {
  componentDidMount() {
    this.props.startFetchingItems();
  }

  render() {
console.log(this.props.items);
    return (
      <h1>Home</h1>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
