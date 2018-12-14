import React, { PureComponent } from 'react';

type ILoadWrapperProps = {
  loading: boolean,
  children?: any,
};

import './index.scss';

export class LoadWrapper extends PureComponent<ILoadWrapperProps> {
  static defaultProps = {
    children: null,
  };

  render() {
    return (
      <div className="flex-box load-wrapper">
        {this.props.loading && (
          <div className="flex-box j-center a-center load-wrapper__overlay">
            <div className="loader"/>
          </div>
        )}

        {this.props.children}
      </div>
    );
  }
}
