import { Bid } from './Bid';

export type Item = {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly sellerFirstName: string;
  readonly sellerLastName: string;
  readonly sellerEmail: string;
  readonly imageLink: string;
  readonly isActive: boolean;
  readonly isSold: boolean;
  readonly closingTime: string;
  readonly startingBid: number;
  readonly minimumIncrease: number;
  readonly bids: Bid[];
};
