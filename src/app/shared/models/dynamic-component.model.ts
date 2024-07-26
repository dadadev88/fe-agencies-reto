export interface DynamicLoadingComponent {
  setProperties(props: DynamicLoadingProps): void;
}

export interface DynamicLoadingProps {
  image: string;
  message: string;
}
