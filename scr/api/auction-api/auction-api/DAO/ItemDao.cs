using auction_api.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace auction_api.DAO
{
    public class ItemDao
    {

        private readonly string connectionString;
        private readonly string defaultImageLink = "https://th.bing.com/th/id/R.1a7bc301df26f4a5bb8d51ca05904443?rik=xY8r%2bU3xUl6dNg&riu=http%3a%2f%2fassets.kogan.com%2ffiles%2fproduct%2fMYSTERY_BOX%2fMYSTERY_BOX_2.jpg&ehk=8Cpu1h69ejdxJR66C4ftmo16eENSKAF1gLTlrXUsw%2f0%3d&risl=&pid=ImgRaw&r=0";

        private readonly BidDao bidDao;

        public ItemDao(string dbConnectionString, BidDao _bidDao)
        {
            connectionString = dbConnectionString;
            bidDao = _bidDao;
        }

        public List<Item> GetAllItems()
        {
            var items = new List<Item>();
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    var cmd = new SqlCommand("SELECT * FROM items ;", conn);
                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        var item = ConvertReaderToItem(reader);
                        items.Add(item);
                    }
                }
                foreach (Item item in items)
                {
                    item.Bids = bidDao.GetBidsByItem(item.Id);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return items;
        }

        public List<Item> GetActiveItems()
        {
            var items = new List<Item>();
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    var cmd = new SqlCommand("SELECT * FROM items  WHERE is_active = 1 and is_sold = 0;", conn);
                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        var item = ConvertReaderToItem(reader);
                        items.Add(item);
                    }
                }
                foreach (Item item in items)
                {
                    item.Bids = bidDao.GetBidsByItem(item.Id);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return items;
        }

        public Item GetItem(int itemId)
        {
            var item = new Item();
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    var cmd = new SqlCommand("SELECT * FROM items  WHERE id = (@ItemId);", conn);
                    cmd.Parameters.AddWithValue("@ItemId", itemId);
                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        item = ConvertReaderToItem(reader);
                    }
                }
                item.Bids = bidDao.GetBidsByItem(item.Id);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return item;
        }


        private Item ConvertReaderToItem(SqlDataReader reader)
        {
            var item = new Item();
            item.Id = Convert.ToInt32(reader["id"]);
            item.Name = Convert.ToString(reader["name"]);
            item.Description = Convert.ToString(reader["description"]);
            item.SellerFirstName = Convert.ToString(reader["seller_first_name"]);
            item.SellerLastName = Convert.ToString(reader["seller_last_name"]);
            item.SellerEmail = Convert.ToString(reader["seller_email"]);
            item.ImageLink = Convert.ToString(reader["link_to_image"]) == "" ? defaultImageLink : Convert.ToString(reader["link_to_image"]);
            item.IsActive = Convert.ToBoolean(reader["is_active"]);
            item.IsSold = Convert.ToBoolean(reader["is_sold"]);
            item.ClosingTime = Convert.ToDateTime(reader["closing_time"]);
            item.StartingBid = Convert.ToDecimal(reader["starting_bid"]);
            item.MinimumIncrease = Convert.ToDecimal(reader["minimum_increase"]);
            return item;
        }
    }
}
