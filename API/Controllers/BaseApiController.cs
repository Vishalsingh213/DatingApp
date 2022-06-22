using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        // private ISender _mediator;
        // protected ISender Mediator => _mediator ??= HttpContext.RequestServices.GetService<ISender>();
        
    }
}