using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AddressBook.Domain;

namespace AddressBook.domain.Concrete
{
    public class EFDbContext : DbContext
    {
        public DbSet<Address> Addresses { get; set; }
    }
}
