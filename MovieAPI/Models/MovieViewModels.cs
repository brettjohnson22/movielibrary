﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MovieAPI.Models
{
    public class MovieViewModel
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Genre { get; set; }
        public string DirectorName { get; set; }
    }
}