import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  fetchSubSections,
  removeSubSections,
} from "../../actions/sub-sections";
import { ISectionData } from "../../../api/types";

type OwnProps = {};

type StoreProps = {
  rootSections: {
    status?: number,
    payload?: ISectionData,
  },
  subSections: {
    status?: number,
    payload?: ISectionData,
  },
};

type DispatchProps = {
  fetchSubSections: (id: string) => void,
  removeSubSections: (ids: string[]) => void,
};

type IMainRouteProps = StoreProps & DispatchProps & OwnProps;

class MainRouteComp extends PureComponent<IMainRouteProps> {
    render(): React.ReactNode {
      console.log('Log ::: this.props :::', this.props);

      return (
        <div className="flex-box">
          This is main route
        </div>
      );
    }
}


const mapStateToProps = (store) => {
  return ({
    rootSections: store.rootSections,
    subSections: store.subSections,
  });
};

const mapDispatchToProps = {
  removeSubSections,
  fetchSubSections,
};

export const MainRoute = connect<StoreProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(MainRouteComp);
