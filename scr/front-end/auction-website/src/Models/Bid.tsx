export type Bid = {
  readonly id: number;
  readonly itemId: number;
  readonly bidderId: number;
  readonly timeStamp: string;
  readonly amount: number;
  readonly bidderUsername: string;
};
