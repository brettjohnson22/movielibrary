using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieAPI.Models
{
    public class MovieViewModel
    {
        public string Title { get; set; }
        public string Genre { get; set; }
        public string DirectorName { get; set; }
    }
}