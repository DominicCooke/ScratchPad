using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web.Mvc;
using AddressBook.domain.Abstract;
using AddressBook.Domain;
using Microsoft.AspNet.Identity;

namespace AddressBook.WebUI.Controllers
{
    public class AddressController : Controller
    {
        private IAddressRepository repository;

        public AddressController(IAddressRepository addressRepository)
        {
            this.repository = addressRepository;
        }

        public Guid returnUserGuid()
        {
            var currentUserId = this.User.Identity.GetUserId();
            Guid userId;
            if (!Guid.TryParse(currentUserId, out userId))
            {
                // Fail
                throw new Exception("User ID not a Guid");
            }
            return userId;
        }

        [Authorize]
        public ViewResult Index()
        {
            IEnumerable<Address> Addresses = repository.Addresses.Where(x => x.UserID == returnUserGuid());
            return View(Addresses);
        }

        public ViewResult Create()
        {
            return View("Edit", new Address());
        }

        public ViewResult Edit(int addressId)
        {
            Address address = repository.Addresses
            .FirstOrDefault(p => p.AddressID == addressId);
            return View(address);
        }
        [HttpPost]
        public ActionResult Edit(Address address)
        {
            if (ModelState.IsValid)
            {
                address.UserID = returnUserGuid();
                repository.SaveAddress(address);
                return RedirectToAction("Index");
            }
            else
            {
                return View(address);
            }
        }
        [HttpPost]
        public ActionResult Delete(int addressId)
        {
            repository.DeleteAddress(addressId);
            return RedirectToAction("Index");
        }
    }
}