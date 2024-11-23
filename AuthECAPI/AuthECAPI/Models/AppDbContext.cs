﻿using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
namespace AuthECAPI.Models
{
	public class AppDbContext:IdentityDbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext>options):base(options)
		{

		}
	}
}
