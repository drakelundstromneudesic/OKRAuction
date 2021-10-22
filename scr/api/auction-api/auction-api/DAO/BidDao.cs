using auction_api.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace auction_api.DAO
{
    public class BidDao
    {
        private readonly string connectionString;

        private readonly string getBidsByItemString = @"SELECT* FROM bids b
JOIN users u ON u.id = b.Bidder_id
WHERE item_id = (@ItemId)
ORDER BY bid_timestamp DESC;";

        public BidDao(string dbConnectionString)
        {
            connectionString = dbConnectionString;
        }

        public List<Bid> GetBidsByItem(int itemId)
        {
            var bids = new List<Bid>();
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();

                    var cmd = new SqlCommand(getBidsByItemString, conn);
                    cmd.Parameters.AddWithValue("@ItemId", itemId);
                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        var bid = ConvertReaderToItem(reader);
                        bids.Add(bid);
                    }
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return bids;
        }

        private Bid ConvertReaderToItem(SqlDataReader reader)
        {
            var bid = new Bid();
            bid.Id = Convert.ToInt32(reader["id"]);
            bid.ItemId = Convert.ToInt32(reader["item_id"]);
            bid.BidderId = Convert.ToInt32(reader["bidder_id"]);
            bid.Amount = Convert.ToDecimal(reader["bid_amount"]);
            bid.TimeStamp = Convert.ToDateTime(reader["bid_timestamp"]);
            bid.BidderUsername = Convert.ToString(reader["username"]);
            return bid;
        }
    }
}
