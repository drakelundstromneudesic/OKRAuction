using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace auction_api.DAO
{
    public class BidDao
    {
                private readonly string connectionString;

        public BidDao (string dbConnectionString)
        {
            connectionString = dbConnectionString;
        }
    }
}
