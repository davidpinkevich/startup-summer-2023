export type TAuthenticationData = {
  CLIENT_SECRET: string;
  LOGIN: string;
  PASSWORD: string;
  CLIENT_ID: string;
  X_SECRET_KEY: string;
};

export type TDataRespAuth = {
  access_token: string;
  ttl: number;
};

export type TDataFindVacancies = {
  profession: string;
  town: { title: string };
  type_of_work: { title: string };
  payment_to: number;
  payment_from: number;
  currency: string;
  id: number;
  vacancyRichText: string;
  error?: { message: string };
};

export type TArrayVacancies = {
  objects: Array<TDataFindVacancies>;
};

export type TDataRespCatalog = {
  title_rus: string;
  key: number;
};

export type TInitialStateJobs = {
  catalogues: Array<{ key: number; title: string }>;
  favorites: Array<TDataFindVacancies>;
  vacancies: Array<TDataFindVacancies>;
  description: Array<TDataFindVacancies>;
  loadingData: string;
  currentPagVac: number;
  currentPagFavor: number;
  arrayPagMain: Array<number>;
  arrayPagFavor: Array<number>;
  totalVacancies: number;
  search: string;
  categoryType: string;
  salaryFrom: string;
  salaryTo: string;
};

export type TInitialStateFilters = {
  searchValue: string;
  category: string;
  fromSalary: number | '';
  toSalary: number | '';
};

export type TStore = {
  jobs: TInitialStateJobs;
  filters: TInitialStateFilters;
};

export type TDataResponse = {
  url: string;
  type: string;
  token: string;
};
