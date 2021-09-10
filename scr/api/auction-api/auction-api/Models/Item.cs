using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace auction_api.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string SellerFirstName { get; set; }
        public string SellerLastName { get; set; }
        public string SellerEmail { get; set; }
        public string ImageLink { get; set; }
        public bool IsActive { get; set; }
        public bool IsSold { get; set; }
        public DateTime ClosingTime { get; set; }
        public decimal StartingBid { get; set; }
        public decimal MinimumIncrease { get; set; }



    }
}
