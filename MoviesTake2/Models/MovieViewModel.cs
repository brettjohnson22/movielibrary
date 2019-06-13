using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesTake2.Models
{
    public class MovieViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public string DirectorName { get; set; }
    }
}