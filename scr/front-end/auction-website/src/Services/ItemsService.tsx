import { Item } from '../Models/Item';
import { get, post } from './HttpClient';
import { HttpStatusCodes } from './HttpStatusCodes';

const ITEMS_ENDPOINT = '/Items';

export const getAllItems = async (): Promise<Array<Item>> => {
  const response = await get(ITEMS_ENDPOINT, true, false);
  return response.status === HttpStatusCodes.Ok ? response.data : [];
};

export const createItem = async (item: Item): Promise<boolean> => {
  const response = await post(ITEMS_ENDPOINT, item, true, false);
  if (response.status !== HttpStatusCodes.Ok) throw new Error(response.status);
  return response.data;
};
