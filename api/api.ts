import data from './endpoint.json';

const subSections = data.subSections;

export const getRootSections = (): Promise<ISectionData> => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(data.rootSections);
      },
      3000,
    );
  });
};

export const getSubSections = (id: string): Promise<{[key: string]: ISectionData}> => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(subSections[id]);
      },
      3000,
    );
  });
};
