
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Task = AngularRESTService.Models.Task;

namespace AngularRESTService.Controllers
{
    public class TasksController : ApiController
    {

        
        static List<Task> tasks = new List<Task>
        {
            new Task{Id = 1, Name = "Learn AngularJS", Status = TaskStatus.Pending.ToString()},
            new Task{Id = 2, Name = "Write blog post", Status = TaskStatus.Pending.ToString()},
            new Task{Id = 3, Name = "Buy milk", Status = TaskStatus.Pending.ToString()}
        };
        public IEnumerable<Task> Get()
        {
            return tasks;
        }

        public Task Get(int id)
        {
            return tasks.Single(t => t.Id == id);
        }

        static int maxId = 3;

        public enum TaskStatus
        {
            Undefined = 0,
            Pending = 1,
            Started = 2,
            Done = 3,
            Cancelled = 4
        }

        public void Post([FromBody] Task value)
        {
            value.Id = ++maxId;
            value.Status = TaskStatus.Pending.ToString();
            tasks.Add(value);
            //HttpContext.Current.Response.AddHeader("Location", "http://localhost:64322/api/api/tasks" + value.Id);
        }
    }
}
