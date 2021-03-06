﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Entity
{
    public class Hijo
    {
        public int IdDerhab { get; set; }
        public int IdPersonal { get; set; }
        public string ApPaterno { get; set; }
        public string ApMaterno { get; set; }
        public string Nombre1 { get; set; }
        public string Nombre2 { get; set; }
        public string NombreCompleto
        {
            get
            {
                return Nombre1 + " " + Nombre2;
            }
        }
        public DateTime FchNac { get; set; }
    }
}
