using AutoMapper;
using Business.DTO;
using Business.UOW;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using REST_API.Helpers.DTO;
using System.Collections.Generic;

namespace REST_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper map;

        public AccountController(IUnitOfWork _uow , IMapper _map)
        {
            uow = _uow;
            map = _map;
        }


        [HttpGet("GetAllUsers")]

        public IActionResult AllUsers()
        {
            var users =  uow.arepo.GetAllUsers();
            if (users != null)
            {
                var ob = map.Map<List<UsersDTO>>(users);

                return Ok(ob);
            }
            return Ok(null);
        }


        [HttpPost("SignUp")]

        public async Task<IActionResult> SignUp(SignUpDTO ob)
        {
            var result = await uow.arepo.CreateMyAsync(ob);
            if (result.Result)
            {
                //foreach (var item in  result.Errors)
                //{
                //    item.Description.

                //}
                
                return Ok(result);
            }
            return Ok(result);
        }

        [HttpPost("LogIn")]

        public async Task<IActionResult> LogIn(LogInDTO ob)
        {
            var result = await uow.arepo.MySignInAsync(ob);
            return Ok(result);

        }

        [HttpGet("LogOut")]
        public async Task<IActionResult> LogOut()
        {
            try
            {
                await uow.arepo.MySignInOutAsync();
            }
            catch(Exception exe)
            {
                return Ok(exe);
            }
            return Ok(true);
        }

    }
}
