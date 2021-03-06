using Entity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Data
{
    public class HijoContext : DataContext
    {
        public HijoContext() : base() { }

        public List<Hijo> HijosByPersonal(int idPersonal)
        {
            using (SqlConnection connection = GetConnection())
            {
                List<Hijo> hijos = new List<Hijo>();

                try
                {
                    connection.Open();

                    SqlCommand command = new SqlCommand(@"getHijosByPersonal", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@IdPersonal", idPersonal);
                    SqlDataReader reader = command.ExecuteReader();

                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            Hijo hijo = new Hijo
                            {
                                IdDerhab = reader.GetInt32("idDerhab"),
                                IdPersonal = reader.GetInt32("idPersonal"),
                                ApPaterno = reader.GetString("apPaterno"),
                                ApMaterno = reader.GetString("apMaterno"),
                                Nombre1 = reader.GetString("nombre1"),
                                Nombre2 = reader.GetString("nombre2"),
                                FchNac = reader.GetDateTime("fchNac")
                            };

                            hijos.Add(hijo);
                        }
                    }

                    return hijos;
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

        public Hijo Hijo(int idDerhab)
        {
            using (SqlConnection connection = GetConnection())
            {
                Hijo hijo = new Hijo();

                try
                {
                    connection.Open();

                    SqlCommand command = new SqlCommand(@"getHijoById", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@IdDerhab", idDerhab);
                    SqlDataReader reader = command.ExecuteReader();

                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            hijo = new Hijo
                            {
                                IdDerhab = reader.GetInt32("idDerhab"),
                                IdPersonal = reader.GetInt32("idPersonal"),
                                ApPaterno = reader.GetString("apPaterno"),
                                ApMaterno = reader.GetString("apMaterno"),
                                Nombre1 = reader.GetString("nombre1"),
                                Nombre2 = reader.GetString("nombre2"),
                                FchNac = reader.GetDateTime("fchNac")
                            };
                        }
                    }

                    return hijo;
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

        public int AddHijo(Hijo hijo)
        {
            int lastId = 0;
            using (SqlConnection connection = GetConnection())
            {
                try
                {
                    connection.Open();

                    SqlCommand command = new SqlCommand(@"addHijo", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@IdPersonal", hijo.IdPersonal);
                    command.Parameters.AddWithValue("@ApPaterno", hijo.ApPaterno);
                    command.Parameters.AddWithValue("@ApMaterno", hijo.ApMaterno);
                    command.Parameters.AddWithValue("@Nombre1", hijo.Nombre1);
                    command.Parameters.AddWithValue("@Nombre2", hijo.Nombre2);
                    command.Parameters.AddWithValue("@FchNac", hijo.FchNac);
                    command.Parameters.Add("@IdDerhab", SqlDbType.Int).Direction = ParameterDirection.Output;
                    command.ExecuteNonQuery();
                    lastId = int.Parse(command.Parameters["@IdDerhab"].Value.ToString());

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
