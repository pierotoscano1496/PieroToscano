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
    public class PersonalController : Controller
    {
        private PersonalBusiness business = new PersonalBusiness();

        [HttpGet]
        public IActionResult Personales()
        {
            try
            {
                List<Personal> personales = business.Personales();
                return Ok(personales);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPost]
        public IActionResult AddPersonal(Personal personal)
        {
            try
            {
                int lastId = business.AddPersonal(personal);
                return Ok(lastId);
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}
