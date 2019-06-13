using MoviesTake2.Core;
using MoviesTake2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace MoviesTake2.Controllers
{
    //[Authorize]
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
        }

        
        // GET api/values/5
        //public IHttpActionResult Find([FromBody] MovieViewModel searchFields)
        //{
        //    var results = db.Movies;
        //    if (searchFields.Title != null)
        //    {
        //        var titles = db.Movies.Where(m => m.Title == searchFields.Title);
        //        return Ok(titles);
        //    }
        //    else if (searchFields.Genre != null)
        //    {
        //        var genres = db.Movies.Single(m => m.Genre == searchFields.Genre);
        //        return Ok(genres);
        //    }
        //    else if (searchFields.DirectorName != null)
        //    {
        //        var directors = db.Movies.Single(m => m.Title == searchFields.Title);
        //        return Ok(directors);
        //    }
        //    else
        //    {
        //        return Ok(results);
        //    }
        //}
        [HttpPost]
        // POST api/values
        public async Task<IHttpActionResult> Post([FromBody] MovieViewModel postedMovie)
        {
            if (!ModelState.IsValid)
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
        //public IHttpActionResult Put([FromBody] MovieViewModel movie)
        //{
        //    var existingMovie = db.Movies.Single(m => m.Title == movie.Title);
        //    if (movie.Title != null)
        //    {
        //        existingMovie.Title = movie.Title;
        //    }
        //    if (movie.Genre != null)
        //    {
        //        existingMovie.Genre = movie.Genre;
        //    }
        //    if (movie.DirectorName != null)
        //    {
        //        existingMovie.DirectorName = movie.DirectorName;
        //    }
        //    db.SaveChanges();
        //    return Ok();
        //}
    }
}
