using TodoApi.Models;

namespace TodoApi.Services;

public interface ITodoRepository
{
    IEnumerable<TodoItem> GetAll();
    TodoItem? GetById(int id);
    TodoItem Add(CreateTodoRequest request);
    TodoItem? Update(int id, UpdateTodoRequest request);
}
