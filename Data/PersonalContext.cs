using Entity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Data
{
    public class PersonalContext : DataContext
    {
        public PersonalContext() : base() { }

        public List<Personal> Personales()
        {
            using (SqlConnection connection = GetConnection())
            {
                List<Personal> personales = new List<Personal>();

                try
                {
                    connection.Open();

                    SqlCommand command = new SqlCommand(@"getAllPersonales", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();

                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            Personal personal = new Personal
                            {
                                IdPersonal = reader.GetInt32("idPersonal"),
                                ApPaterno = reader.GetString("apPaterno"),
                                ApMaterno = reader.GetString("apMaterno"),
                                Nombre1 = reader.GetString("nombre1"),
                                Nombre2 = reader.GetString("nombre2"),
                                FchNac = reader.GetDateTime("fchNac"),
                                FchIngreso = reader.GetDateTime("fchIngreso")
                            };

                            personales.Add(personal);
                        }
                    }

                    return personales;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public int AddPersonal(Personal personal)
        {
            int lastId = 0;
            using (SqlConnection connection = GetConnection())
            {
                try
                {
                    connection.Open();

                    SqlCommand command = new SqlCommand(@"addPersonal");
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@ApPaterno", personal.ApPaterno);
                    command.Parameters.AddWithValue("@ApMaterno", personal.ApMaterno);
                    command.Parameters.AddWithValue("@Nombre1", personal.Nombre1);
                    command.Parameters.AddWithValue("@Nombre2", personal.Nombre2);
                    command.Parameters.AddWithValue("@FchNac", personal.FchNac);
                    command.Parameters.AddWithValue("@FchIngreso", personal.FchIngreso);
                    command.Parameters.Add("@IdPersonal", SqlDbType.Int).Direction = ParameterDirection.Output;
                    command.ExecuteNonQuery();
                    lastId = int.Parse(command.Parameters["@IdPersonal"].Value.ToString());

                    return lastId;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
                finally
                {
                    connection.Close();
                }
            }
        }
    }
}
