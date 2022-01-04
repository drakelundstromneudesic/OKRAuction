import axios from 'axios';
import { getAuthToken } from './AuthService';
import { useEnvironmentVariables } from './useEnviromentVariables';

export const get = async <T,>(uri: string, isSecure: boolean = true, isOverrideUrl: boolean = false) => {
  const { url, header } = getRequestArgs(uri, isSecure, isOverrideUrl);
  try {
    const response = await axios.get(getBaseUrl + uri); //url, header);
    return { status: response.status, data: response.data };
  } catch (errorResponse) {
    return getErrors(errorResponse);
  }
};

export const post = async <T,>(uri: string, data: any, isSecure: boolean = true, isOverrideUrl: boolean = false) => {
  const { url, header } = getRequestArgs(uri, isSecure, isOverrideUrl);
  try {
    const response = await axios.post(url, data, header);
    return { status: response.status, data: response.data };
  } catch (errorResponse) {
    return getErrors(errorResponse);
  }
};

//delete is a reserved keyword, changed to httpDelete
export const httpDelete = async <T,>(uri: string, isSecure: boolean = true, isOverrideUrl: boolean = false) => {
  const { url, header } = getRequestArgs(uri, isSecure, isOverrideUrl);
  try {
    const response = await axios.delete(url, header);
    return { status: response.status, data: response.data };
  } catch (errorResponse) {
    return getErrors(errorResponse);
  }
};

export const getBaseUrl = (): string => useEnvironmentVariables().apiUri;

const getRequestArgs = (uri: string, isSecure: boolean, isOverrideUrl: boolean) => {
  const url = isOverrideUrl ? uri : getBaseUrl() + uri;
  const token = isSecure ? getAuthToken() : null;
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return { url, header };
};

const getErrors = (errorResponse: any) => {
  const status = errorResponse?.response?.status ?? 0;
  const data = errorResponse?.response?.data;
  return data ? { status, data } : { status, data: 'Unknown network error' };
};
