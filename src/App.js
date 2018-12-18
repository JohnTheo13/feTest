import React from 'react';
import { connect } from 'react-redux';

// Contains 'Home', 'User' and 'NotFound'
import * as components from './containers';

const App = ({ page }) => {
    const Component = components[page];
    return <Component />;
  },
  mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(App);
