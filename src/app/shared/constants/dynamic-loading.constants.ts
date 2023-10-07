import { DynamicLoadingProps } from "@shared/models/dynamic-component.model";

type DynamicLoadingDataKeys = {
  [code: string]: DynamicLoadingProps;
};

export const DYNAMIC_LOADING_DATA: DynamicLoadingDataKeys = {
  LO_001: {
    message: 'Cargando información',
    image: 'loading1.gif'
  },
  LO_GOOGLE: {
    message: 'Buscando información',
    image: 'loading-google.gif'
  }
};
