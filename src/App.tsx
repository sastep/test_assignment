import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import {
  LoadWrapper,
} from './components/index';

import {
  MainRoute,
} from './elements/index';

import { fetchRootSections } from './actions/root-sections';

import './index.scss';

import { ISectionData } from '../api/types';

type OwnProps = {};

type StoreProps = {
  rootSections: {
    status?: number,
    payload?: ISectionData,
  },
};

type DispatchProps = {
  fetchRootSections: () => void,
};

type IAppProps = StoreProps & DispatchProps & OwnProps;

const A = () => (<div className='flex-box'>aaaaaaaaaaaaaa</div>);

class App extends React.PureComponent<IAppProps> {
  componentDidMount() {
    this.props.fetchRootSections();
  }

  render(): React.ReactNode {
    console.log('Log ::: this.props :::', this.props);
    return (
      <LoadWrapper loading={this.props.rootSections.status !== 2}>
        <div className="flex-box no-grow">
          <Link to="/1.1"><h1>Test Assignment</h1></Link>
        </div>

          <Switch>
            <Route path="/:ids?" component={MainRoute}/>
          </Switch>

      </LoadWrapper>
    );
  }
}

const mapStateToProps = (store) => {
  return ({
    rootSections: store.rootSections,
  });
};

const mapDispatchToProps = {
  fetchRootSections,
};

export default connect<StoreProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(App);
