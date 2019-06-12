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
using System.Web.Http.Cors;

namespace MovieAPI.Controllers
{
    //[AllowCrossSite]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET api/values
        [HttpGet]
        public IHttpActionResult Get()
        {
            var movies = db.Movies;
            return Ok(movies);
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            var result = db.Movies.Single(m => m.Id == id);
            return Ok(result);
        }

        // POST api/values
        public IHttpActionResult Post([FromBody] MovieViewModel postedMovie)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest("Invalid data.");
            }
            var movie = new Movie();
            movie.Title = postedMovie.Title;
            movie.Genre = postedMovie.Genre;
            movie.DirectorName = postedMovie.DirectorName;
            db.Movies.Add(movie);
            db.SaveChanges();
            return Ok();
        }

        // PUT api/values/5
        public IHttpActionResult Put([FromBody] MovieViewModel movie)
        {
            var existingMovie = db.Movies.Single(m => m.Title == movie.Title);
            if(movie.Title != null)
            {
                existingMovie.Title = movie.Title;
            }
            if(movie.Genre != null)
            {
                existingMovie.Genre = movie.Genre;
            }
            if(movie.DirectorName != null)
            {
                existingMovie.DirectorName = movie.DirectorName;
            }
            db.SaveChanges();
            return Ok();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
