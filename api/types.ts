export interface ISubSectionData {
  name: string;
  id: string;
}

export interface ISectionData {
  [ key: string ]: ISubSectionData;
}

export interface IAPIData {
  rootSections: ISectionData;
  subSections:ISectionData;
}
