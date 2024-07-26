import { DynamicLoadingProps } from "@shared/models/dynamic-component.model";

export enum DynamicLoadingKeys {
  LO_001 = 'LO_001',
  LO_GOOGLE = 'LO_GOOGLE'
}

export type DynamicLoadingKey = keyof typeof DynamicLoadingKeys;

export const DynamicLoadingData: { [K in DynamicLoadingKey]: DynamicLoadingProps } = {
  LO_001: {
    message: 'Cargando información',
    image: 'loading1.gif'
  },
  LO_GOOGLE: {
    message: 'Buscando información',
    image: 'loading-google.gif'
  }
};
