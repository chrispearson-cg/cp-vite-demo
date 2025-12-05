using TodoApi.Models;

namespace TodoApi.Services;

public class InMemoryTodoRepository : ITodoRepository
{
    private readonly List<TodoItem> _todos;
    private int _nextId;

    public InMemoryTodoRepository()
    {
        _nextId = 1;
        _todos = new List<TodoItem>
        {
            new TodoItem
            {
                Id = _nextId++,
                Description = "Complete project documentation",
                Status = TodoStatus.Complete
            },
            new TodoItem
            {
                Id = _nextId++,
                Description = "Review pull requests",
                Status = TodoStatus.Active
            },
            new TodoItem
            {
                Id = _nextId++,
                Description = "Deploy to production",
                Status = TodoStatus.Active
            }
        };
    }

    public IEnumerable<TodoItem> GetAll()
    {
        return _todos;
    }

    public TodoItem? GetById(int id)
    {
        return _todos.FirstOrDefault(t => t.Id == id);
    }

    public TodoItem Add(CreateTodoRequest request)
    {
        var todo = new TodoItem
        {
            Id = _nextId++,
            Description = request.Description,
            Status = request.Status
        };

        _todos.Add(todo);
        return todo;
    }

    public TodoItem? Update(int id, UpdateTodoRequest request)
    {
        var todo = _todos.FirstOrDefault(t => t.Id == id);
        if (todo == null)
        {
            return null;
        }

        todo.Description = request.Description;
        todo.Status = request.Status;

        return todo;
    }
}
