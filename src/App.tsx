import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  LoadWrapper,
} from './components/index';

import {
  RecursiveRoutes,
} from './elements/index';

import { fetchRootSections } from './actions/root-sections';

import './index.scss';

type StoreProps = {
  rootSections?: IAPIResponse<ISectionData>,
};

type DispatchProps = {
  fetchRootSections?: () => void,
};

type IAppProps = StoreProps & DispatchProps;

class App extends PureComponent<IAppProps> {
  componentDidMount(): void {
    this.props.fetchRootSections();
  }

  render(): React.ReactNode {
    const loading: boolean = this.props.rootSections.status !== 2;

    return (
      <LoadWrapper loading={loading} className="app-root">
        <div className="flex-box no-grow">
          <h1 className="app-root__title">Test Assignment</h1>
        </div>

        {!loading && <RecursiveRoutes />}
      </LoadWrapper>
    );
  }
}

const mapStateToProps = (store: IStoreData): StoreProps => {
  return ({
    rootSections: store.rootSections,
  });
};

const mapDispatchToProps: DispatchProps = {
  fetchRootSections,
};

export default connect<StoreProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(App);
