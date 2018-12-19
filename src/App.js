// @flow
import React from 'react';
import { connect } from 'react-redux';

// Contains 'Home', 'Item' and 'NotFound'
import * as components from './containers';

const App = ({ page }: { page: string }) => {
    const Component = components[page];
    return <Component />;
  },
  mapStateToProps: Function = ({ page }: { page: string }): { page: string } => ({ page });

export default connect(mapStateToProps)(App);
