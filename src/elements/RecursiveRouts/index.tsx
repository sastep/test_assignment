import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RecursiveRoute from './RecursiveRoute';

import './index.scss';

export class RecursiveRoutes extends PureComponent<{}> {
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <RecursiveRoute />
      </BrowserRouter>
    );
  }
}
