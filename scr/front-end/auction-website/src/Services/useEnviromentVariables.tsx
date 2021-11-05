export type EnvironmentVariables = {
  apiUri: string;
};

export const useEnvironmentVariables = (): EnvironmentVariables => {
  const checkedApiURI =
    ((window as any).API_URI as string) === '%SUBAPIURI%'
      ? 'https://localhost:44389'
      : ((window as any).API_URI as string);

  const EnvironmentVars: EnvironmentVariables = {
    // apiUri: checkedApiURI,
    apiUri: 'https://localhost:44389',
  };
  return EnvironmentVars;
};
