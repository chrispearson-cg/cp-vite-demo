namespace TodoApi.Models;

public class UpdateTodoRequest
{
    public required string Description { get; set; }
    public TodoStatus Status { get; set; }
}
