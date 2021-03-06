using Data;
using Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business
{
    public class HijoBusiness
    {
        private HijoContext context = new HijoContext();

        public List<Hijo> HijosByPersonal(int idPersonal)
        {
            List<Hijo> hijos = context.HijosByPersonal(idPersonal);
            return hijos;
        }

        public int AddHijo(Hijo hijo)
        {
            int lastId = context.AddHijo(hijo);
            return lastId;
        }
    }
}
