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

import {
  removeSectionID,
  addSelectedSectionID,
} from '../../../actions/selected-sections';

type OwnProps = {
  match?: any,
};

type StoreProps = {
  selectedSections?: string[],
  subSections?: IAPIResponse<ISectionData>,
  rootSections?: IAPIResponse<ISectionData>,
};

type DispatchProps = {
  removeSectionID?: (id: string) => void,
  fetchSubSections?: (id: string) => void,
  removeSubSections?: (id: string) => void,
  addSelectedSectionID?: (id: string) => void,
};

type IRecursiveRouteProps = StoreProps & DispatchProps & OwnProps;

class RecursiveRoute extends PureComponent<IRecursiveRouteProps> {
  componentDidMount(): void {
    const {
      match,
    } = this.props;

    if (match.params.id) {
      this.props.fetchSubSections(match.params.id);
      this.addSectionIDtoSelected(match.params.id)();
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
      this.props.removeSectionID(prevProps.match.params.id);
      this.props.removeSubSections(prevProps.match.params.id);
    }
  }

  componentWillUnmount(): void {
    this.props.removeSectionID(this.props.match.params.id);
    this.props.removeSubSections(this.props.match.params.id);
  }

  generateURL = (id: string): string => {
    const {
      match,
    } = this.props;

    return (`${match.url}${match.url === '/' ? id : `/${id}`}`);
  };

  generateListItemClassName = (id: string): string => {
    const selected = this.props.selectedSections.includes(id);

    return `menu-item ${selected ? 'selected' : ''}`;
  };

  addSectionIDtoSelected = (id: string): () => void => (): void => {
    if (!this.props.selectedSections.includes(id)) {
      this.props.addSelectedSectionID(id);
    }
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
                    <li
                      key={id}
                      onClick={this.addSectionIDtoSelected(id)}
                    >
                      <Link
                        to={this.generateURL(id)}
                        className={this.generateListItemClassName(id)}
                      >
                        {section.name.toUpperCase()}
                      </Link>
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
    selectedSections: store.selectedSections,
  });
};

const mapDispatchToProps: DispatchProps = {
  removeSectionID,
  fetchSubSections,
  removeSubSections,
  addSelectedSectionID,
};

const Comp = connect<StoreProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(RecursiveRoute);

export default withRouter(Comp as any);
