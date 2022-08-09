﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Entities
{
    public class ApplicationIdentityUser : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public string? Role { get; set; }

    }
}
