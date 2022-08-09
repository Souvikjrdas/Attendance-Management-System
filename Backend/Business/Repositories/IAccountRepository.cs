using Business.DTO;
using Data.Entities;
using Microsoft.AspNetCore.Identity;

namespace Business.Repositories
{
    public interface IAccountRepository
    {
        Task<AccountResult> CreateMyAsync(SignUpDTO ob);
        Task<AccountResult> MySignInAsync(LogInDTO ob);
        Task<Boolean> MySignInOutAsync();
        IEnumerable<ApplicationIdentityUser>? GetAllUsers();

    }
}