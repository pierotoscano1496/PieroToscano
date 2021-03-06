using Business;
using Entity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PieroToscano.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class HijoController : Controller
    {
        private HijoBusiness business = new HijoBusiness();

        [HttpGet("{idPersonal}")]
        public IActionResult HijosByPersonal(int idPersonal)
        {
            try
            {
                List<Hijo> hijos = business.HijosByPersonal(idPersonal);
                return Ok(hijos);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPost]
        public IActionResult AddHijo(Hijo hijo)
        {
            try
            {
                int lastId = business.AddHijo(hijo);
                return Ok(lastId);
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}
