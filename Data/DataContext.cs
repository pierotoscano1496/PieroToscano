using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;

namespace Data
{
    public class DataContext
    {
        protected string connectionString;

        public DataContext()
        {
            connectionString = "Data Source=DESKTOP-FN2O8M0;Initial Catalog=PieroToscano;User ID=sa;Password=piero;";
        }

        protected SqlConnection GetConnection()
        {
            return new SqlConnection(connectionString);
        }
    }
}
