using Business.DTO;
using Data.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly UserManager<ApplicationIdentityUser> um;
        private readonly SignInManager<ApplicationIdentityUser> sm;
        private AccountResult account;
        public AccountRepository(SignInManager<ApplicationIdentityUser> _sm , UserManager<ApplicationIdentityUser> _um)
        {
            sm = _sm;
            um = _um;
            account = new AccountResult();
        }

        public async Task<AccountResult> CreateMyAsync(SignUpDTO ob)                                         //Create new User
        {
            var user = new ApplicationIdentityUser()
            {
                Email = ob.Email,
                FirstName = ob.FirstName,
                LastName = ob.LastName,
                UserName = ob.Email,
                Role = ob.Role,
            };
            var result = await um.CreateAsync(user,ob.Password);
            if (result.Succeeded)
            {
                account.Result = result.Succeeded;
                account.UserId = user.Id;
                return account;
            }
            account.Result = false;
            return account;
        }

        public async Task<AccountResult> MySignInAsync(LogInDTO ob)                                              //Sign in User
        {
            var result = await sm.PasswordSignInAsync(ob.Email, ob.Password, false, false);
            if (result.Succeeded)
            {
                var ob1 = um.Users.Where(item => item.Email == ob.Email).FirstOrDefault();
                if(ob1 != null)
                {
                    account.Result = true;
                    account.UserId = ob1.Id;
                    return account;
                }
                account.Result= false;
                return account;
            }
            account.Result = result.Succeeded;
            return account;
        }

        public async Task<Boolean> MySignInOutAsync()                                                                    //Sign Out User
        {
            await sm.SignOutAsync();
            return true;
        }


        //All Employees

        public IEnumerable<ApplicationIdentityUser>? GetAllUsers()
        {
            var ob = um.Users.ToList();
            if (ob.Any())
            {
                return ob.Where(item=>item.Role != "TeamLead");
            }
            return null;
        }

    }
}
