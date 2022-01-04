export type EnvironmentVariables = {
  apiUri: string;
};

export const useEnvironmentVariables = (): EnvironmentVariables => {
  const checkedApiURI = window.location.hostname.includes('localhost')
    ? 'https://okrneudesictest.azurewebsites.net' //'https://localhost:44389'
    : 'https://okrneudesictest.azurewebsites.net';
  const EnvironmentVars: EnvironmentVariables = {
    apiUri: checkedApiURI,
  };
  return EnvironmentVars;
};
