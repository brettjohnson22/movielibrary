using MovieAPI.Core;
using MovieAPI.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace MovieAPI.Controllers
{
    [AllowCrossSite]
    
    public class ValuesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET api/values
        [HttpGet]
        public IHttpActionResult Get()
        {

            var movies = db.Movies;
            return Ok(movies);

            //return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            var result = db.Movies.Single(m => m.Id == id);
            return Ok(result);
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
