using System;
using System.Collections.Generic;
using System.Web.Mvc;
using AddressBook.domain.Abstract;
using AddressBook.domain.Concrete;

using Microsoft.AspNet.Identity;
using Ninject;

namespace AddressBook.WebUI.Infrastructure
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private IKernel kernel;
        public NinjectDependencyResolver(IKernel kernelParam)
        {
            kernel = kernelParam;
            AddBindings();
        }

        public object GetService(Type serviceType)
        {
            return kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return kernel.GetAll(serviceType);
        }

        private void AddBindings()
        {
            kernel.Bind<IAddressRepository>().To<EFAddressRepository>();
        }
    }
}