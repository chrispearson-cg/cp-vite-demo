using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;
using TodoApi.Services;

namespace TodoApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodosController : ControllerBase
{
    private readonly ITodoRepository _repository;

    public TodosController(ITodoRepository repository)
    {
        _repository = repository;
    }

    /// <summary>
    /// Get all todo items
    /// </summary>
    [HttpGet]
    public ActionResult<IEnumerable<TodoItem>> GetAll()
    {
        var todos = _repository.GetAll();
        return Ok(todos);
    }

    /// <summary>
    /// Get a specific todo item by ID
    /// </summary>
    [HttpGet("{id}")]
    public ActionResult<TodoItem> GetById(int id)
    {
        var todo = _repository.GetById(id);
        
        if (todo == null)
        {
            return NotFound(new { message = $"Todo item with ID {id} not found" });
        }

        return Ok(todo);
    }

    /// <summary>
    /// Create a new todo item
    /// </summary>
    [HttpPost]
    public ActionResult<TodoItem> Create([FromBody] CreateTodoRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Description))
        {
            return BadRequest(new { message = "Description is required" });
        }

        var todo = _repository.Add(request);
        return CreatedAtAction(nameof(GetById), new { id = todo.Id }, todo);
    }

    /// <summary>
    /// Update an existing todo item
    /// </summary>
    [HttpPut("{id}")]
    public ActionResult<TodoItem> Update(int id, [FromBody] UpdateTodoRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Description))
        {
            return BadRequest(new { message = "Description is required" });
        }

        var todo = _repository.Update(id, request);
        
        if (todo == null)
        {
            return NotFound(new { message = $"Todo item with ID {id} not found" });
        }

        return Ok(todo);
    }
}
