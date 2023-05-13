export type TAuthenticationData = {
  CLIENT_SECRET: string;
  LOGIN: string;
  PASSWORD: string;
  CLIENT_ID: string;
  X_SECRET_KEY: string;
};

export type TDataRespAuth = {
  access_token: string;
  token_type: string;
};

type TDataFindVacancies = {
  profession: string;
  firm_name: string;
  town: { title: string };
  type_of_work: { title: string };
  payment_to: number;
  payment_from: number;
  currency: string;
};

export type TArrayVacancies = {
  objects: Array<TDataFindVacancies>;
};

export type TDataRespCatalog = {
  title_rus: string;
};

export type TInitialState = {
  catalogues: Array<string>;
  access_token: string;
  token_type: string;
  vacancies: Array<TDataFindVacancies>;
  loadingData: string;
};

export type TStore = {
  jobs: TInitialState;
};

export type TDataResponse = {
  url: string;
  type: string;
  token: string;
};
