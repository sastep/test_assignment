declare module '*.json';

declare interface IAPIResponse<T> {
  status?: number;
  payload?: T;
}

declare interface ISubSectionData {
  name: string;
  id: string;
}

declare interface ISectionData {
  [ key: string ]: ISubSectionData;
}

declare interface IStoreData {
  rootSections: IAPIResponse<ISectionData>;
  subSections: IAPIResponse<ISectionData>;
  selectedSections: string[];
}

declare interface IActionType<T> {
  type: string,
  payload?: T
}
