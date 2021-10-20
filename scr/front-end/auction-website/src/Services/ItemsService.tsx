import { Item } from '../Models/Item';
import { get } from './HttpClient';
import { HttpStatusCodes } from './HttpStatusCodes';

const ITEMS_ENDPOINT = '/Items';

export const getAllItems = async (): Promise<Array<Item>> => {
  const response = await get(ITEMS_ENDPOINT, true, false);
  return response.status === HttpStatusCodes.Ok ? response.data : [];
};
