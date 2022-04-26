using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController: BaseApiController
    {
        private readonly DataContext _context;
        public AccountController(DataContext context)
        {
            this._context=context;
        }



        

        // [HttpPost("register")]
        // public async Task<ActionResult<AppUser>> Register(RegisterDTO registerDto)
        // {
        //     if(await UserExists(registerDto.Username)) return BadRequest("username is taken");
        //     using var hmac = new HMACSHA512();
        //     var user = new AppUser
        //     {
        //         UserName= registerDto.Username,
        //         Passwordhash = hmac.ComputerHash(Encoding.UTF8.GetBytes(registerDto.Password)),
        //         PasswordSalt = hmac.Key
        //     };

        //     _context.Users.Add(user);
        //     await _context.SaveChangesAsync();

        //     return user;
        // }

//         private async Task<bool> UserExists(string username)
//         {
// //            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
//         }



    }
}