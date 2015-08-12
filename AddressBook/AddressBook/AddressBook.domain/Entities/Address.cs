using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using AddressBook.domain.Abstract;

namespace AddressBook.Domain
{
    public class Address
    {
        [HiddenInput(DisplayValue = false)]
        public int AddressID { get; set; }
        [HiddenInput(DisplayValue = false)]
        [Required]
        public Guid UserID { get; set; }
        [Required(ErrorMessage = "Please enter the first address line")]
        public string FirstLineOfAddress { get; set; }

        public string SecondLineOfAddress { get; set; }

        public string ThirdLineOfAddress { get; set; }

        [Required(ErrorMessage = "Please enter the city")]
        public string City { get; set; }

        [Display(Name = "Postcode"), Required(ErrorMessage = "Please enter the post code")]
        public string PostCode { get; set; }

        [Display(Name = "Mobile number"), Required(ErrorMessage = "Please enter the mobile number")]
        public string MobileNumber { get; set; }

        [Display(Name = "Phone number")]
        public string PhoneNumber { get; set; }

    }
}
