using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace auction_api.Models
{
    public class Bid
    {
        public int Id { get; set; }
        public int ItemId { get; set; }
        public int BidderId { get; set; }
        public DateTime TimeStamp { get; set; }
        public decimal Amount { get; set; }
        public string BidderUsername { get; set; }


        public Bid()
        {
        }

        public Bid(int itemId, DateTime timeStamp, decimal amount)
        {
            ItemId = itemId;
            TimeStamp = timeStamp;
            Amount = amount;
        }

        public Bid(int id, int itemId, int bidderId, DateTime timeStamp, decimal amount)
        {
            Id = id;
            ItemId = itemId;
            BidderId = bidderId;
            TimeStamp = timeStamp;
            Amount = amount;
        }
    }
}
