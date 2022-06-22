using API.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.RequestHandlers
{
  public class Task : IRequest<string>
    {
        int id;
    }

    public class TaskHandler :IRequestHandler<Task, ActionResult<AppUser>>
    {
        private readonly IConfiguration _config;
        public TaskHandler()
        {
        }

    public override bool Equals(object obj)
    {
      return obj is TaskHandler handler &&
             EqualityComparer<IConfiguration>.Default.Equals(_config, handler._config);
    }

    public override int GetHashCode()
    {
      return base.GetHashCode();
    }

    public Task<ActionResult<AppUser>> Handle(Task request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException( );
        }

    public override string ToString()
    {
      return base.ToString();
    }
  }
}