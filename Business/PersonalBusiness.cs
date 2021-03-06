using Data;
using Entity;
using System;
using System.Collections.Generic;

namespace Business
{
    public class PersonalBusiness
    {
        private PersonalContext context = new PersonalContext();

        public List<Personal> Personales()
        {
            List<Personal> personales = context.Personales();
            return personales;
        }

        public int AddPersonal(Personal personal)
        {
            int lastId = context.AddPersonal(personal);
            return lastId;
        }
    }
}
