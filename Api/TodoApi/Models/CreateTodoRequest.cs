namespace TodoApi.Models;

public class CreateTodoRequest
{
    public required string Description { get; set; }
    public TodoStatus Status { get; set; } = TodoStatus.Pending;
}
