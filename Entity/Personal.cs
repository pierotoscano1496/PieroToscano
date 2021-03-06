using System;

namespace Entity
{
    public class Personal
    {
        public int IdPersonal { get; set; }
        public string ApPaterno { get; set; }
        public string ApMaterno { get; set; }
        public string Nombre1 { get; set; }
        public string Nombre2 { get; set; }
        public string NombreCompleto {
            get {
                return Nombre1 + " " + Nombre2;
            }
        }
        public DateTime FchNac { get; set; }
        public DateTime FchIngreso { get; set; }
    }
}
