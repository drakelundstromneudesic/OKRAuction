using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace auction_api.DAO
{
    public class UserDao
    {

        private readonly string connectionString;

        public UserDao(string dbConnectionString)
        {
            connectionString = dbConnectionString;
        }
    }
}
