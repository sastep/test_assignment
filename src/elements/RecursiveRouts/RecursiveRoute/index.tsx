import React, { PureComponent } from 'react';
import {
  Link,
  Route,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

import {
  LoadWrapper,
} from '../../../components/index';

import {
  fetchSubSections,
  removeSubSections,
} from '../../../actions/sub-sections';

type OwnProps = {
  match?: any,
};

type StoreProps = {
  subSections?: IAPIResponse<ISectionData>,
  rootSections?: IAPIResponse<ISectionData>,
};

type DispatchProps = {
  fetchSubSections?: (id: string) => void,
  removeSubSections?: (id: string) => void,
};

type IRecursiveRouteProps = StoreProps & DispatchProps & OwnProps;

class RecursiveRoute extends PureComponent<IRecursiveRouteProps> {
  componentDidMount(): void {
    const {
      match,
    } = this.props;

    if (match.params.id) {
      this.props.fetchSubSections(match.params.id);
      this.props.removeSubSections(match.params.id);
    }
  }

  componentDidUpdate(prevProps: Readonly<IRecursiveRouteProps>): void {
    const {
      match,
    } = this.props;

    if (
      match.params.id
      && prevProps.match.params.id
      && (prevProps.match.params.id !== match.params.id)
    ) {
      this.props.fetchSubSections(match.params.id);
      this.props.removeSubSections(prevProps.match.params.id);
    }
  }

  componentWillUnmount(): void {
    this.props.removeSubSections(this.props.match.params.id);
  }

  generateURL = (id: string): string => {
    const {
      match,
    } = this.props;

    return (`${match.url}${match.url === '/' ? id : `/${id}`}`);
  };

  render(): React.ReactNode {
    const {
      match,
      subSections,
    } = this.props;

    const loading: boolean = (subSections && !!subSections.status && match.isExact)
      ? (subSections.status !== 2)
      : false;
    const sections: (ISectionData | ISubSectionData) = (match.params.id && subSections && subSections.payload)
      ? subSections.payload[ match.params.id ]
      : (this.props.rootSections || {}).payload;

    return (
      <div className="flex-box horizontal no-shrink no-wrap j-start sections-wrapper">
        <div className="flex-box horizontal no-grow sections">
          <LoadWrapper loading={loading}>
            <ul className="sections-list">
              {sections
                ? (Object.values(sections).map((section) => {
                  const {
                    id,
                  } = section;

                  return (
                    <li key={id}>
                      <Link to={this.generateURL(id)} className="menu-item">{section.name.toUpperCase()}</Link>
                    </li>
                  );
                }))
                : (
                  <div className="flex-box j-center a-center menu-item">
                    <div style={{ textAlign: 'center' }}>There are no sub sections</div>
                  </div>
                )}
            </ul>
          </LoadWrapper>
        </div>

        <Route path={this.generateURL(':id')} component={Comp}/>
      </div>
    );
  }
}

const mapStateToProps = (store: IStoreData): StoreProps => {
  return ({
    subSections: store.subSections,
    rootSections: store.rootSections,
  });
};

const mapDispatchToProps: DispatchProps = {
  fetchSubSections,
  removeSubSections,
};

const Comp = connect<StoreProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(RecursiveRoute);

export default withRouter(Comp as any);
