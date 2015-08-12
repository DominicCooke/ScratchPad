using System.Collections.Generic;
using AddressBook.domain.Abstract;
using AddressBook.Domain;

namespace AddressBook.domain.Concrete
{
    public class EFAddressRepository : IAddressRepository
    {
        private EFDbContext context = new EFDbContext();
        public IEnumerable<Address> Addresses
        {
            get { return context.Addresses; }
        }

        public void SaveAddress(Address address)
        {
            if (address.AddressID == 0)
            {
                context.Addresses.Add(address);
            }
            else
            {
                Address dbEntry =
                context.Addresses.Find(address.AddressID);
                if (dbEntry != null)
                {
                    dbEntry.UserID = address.UserID;
                    dbEntry.FirstLineOfAddress = address.FirstLineOfAddress;
                    dbEntry.SecondLineOfAddress = address.SecondLineOfAddress;
                    dbEntry.ThirdLineOfAddress = address.ThirdLineOfAddress;
                    dbEntry.City = address.City;
                    dbEntry.PostCode = address.PostCode;
                    dbEntry.PhoneNumber = address.PhoneNumber;
                    dbEntry.MobileNumber = address.MobileNumber;
                }
            } context.SaveChanges();
        }

        public Address DeleteAddress(int addressID)
        {
            Address dbEntry = context.Addresses.Find(addressID);
            if (dbEntry != null)
            {
                context.Addresses.Remove(dbEntry);
                context.SaveChanges();
            } return dbEntry;
        }
    }
}
