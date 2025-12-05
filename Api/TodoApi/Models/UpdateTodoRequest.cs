namespace TodoApi.Models;

public class UpdateTodoRequest
{
    public required string Description { get; set; }
    public required bool IsCompleted { get; set; }
}