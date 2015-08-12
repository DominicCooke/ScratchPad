using System.Collections.Generic;
using System.Reflection;
using AddressBook.Domain;

namespace AddressBook.domain.Abstract
{
    public interface IAddressRepository
    {
        IEnumerable<Address> Addresses { get; }
        void SaveAddress(Address address);
        Address DeleteAddress(int addressID);
    }
}
