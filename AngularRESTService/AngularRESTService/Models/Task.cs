﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularRESTService.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
    }
}