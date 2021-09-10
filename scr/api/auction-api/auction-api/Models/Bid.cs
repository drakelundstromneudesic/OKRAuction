using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace auction_api.Models
{
    public class Bid
    {
        public int Id { get; }
        public int ItemId { get; }
        public int BidderId { get; }
        public DateTime TimeStamp { get; }
        public decimal Amount { get; }

        public Bid(int itemId, DateTime timeStamp, decimal amount)
        {
            ItemId = itemId;
            TimeStamp = timeStamp;
            Amount = amount;
        }

        public Bid( int id , int itemId , int bidderId, DateTime timeStamp, decimal amount  )
        {
            Id = id;
            ItemId = itemId;
            BidderId = bidderId;
            TimeStamp = timeStamp;
            Amount = amount;
        }
    }
}
