# Todo API

ASP.NET Core Web API for managing todo items.

## Features

- **In-memory storage** with 3 default todo items
- **Auto-incrementing integer IDs** starting from 1
- **Repository pattern** with dependency injection
- **REST endpoints** with proper HTTP status codes
- **Swagger UI** for API documentation and testing

## Data Model

### TodoItem
- `Id` (int) - Unique identifier, auto-generated
- `Description` (string) - Todo description
- `Status` (enum) - Pending, Active, or Complete

## API Endpoints

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|--------------|
| GET | `/api/todos` | Get all todo items | 200 OK |
| GET | `/api/todos/{id}` | Get todo by ID | 200 OK, 404 Not Found |
| POST | `/api/todos` | Create new todo | 201 Created, 400 Bad Request |
| PUT | `/api/todos/{id}` | Update todo | 200 OK, 400 Bad Request, 404 Not Found |

## Running the API

```powershell
cd TodoApi
dotnet restore
dotnet run
```

The API will be available at:
- HTTP: http://localhost:5000
- HTTPS: https://localhost:5001
- Swagger UI: https://localhost:5001/swagger

## Example Requests

### Get All Todos
```bash
GET /api/todos
```

### Get Todo by ID
```bash
GET /api/todos/1
```

### Create Todo
```bash
POST /api/todos
Content-Type: application/json

{
  "description": "New todo item",
  "status": 0
}
```

Status values: 0 = Pending, 1 = Active, 2 = Complete

### Update Todo
```bash
PUT /api/todos/1
Content-Type: application/json

{
  "description": "Updated description",
  "status": 2
}
```

## Project Structure

```
TodoApi/
├── Controllers/
│   └── TodosController.cs      # REST API endpoints
├── Models/
│   ├── TodoItem.cs             # Main todo entity
│   ├── TodoStatus.cs           # Status enum
│   ├── CreateTodoRequest.cs    # Create DTO
│   └── UpdateTodoRequest.cs    # Update DTO
├── Services/
│   ├── ITodoRepository.cs      # Repository interface
│   └── InMemoryTodoRepository.cs # In-memory implementation
├── Properties/
│   └── launchSettings.json     # Launch configuration
├── Program.cs                   # Application entry point
├── appsettings.json            # Configuration
└── TodoApi.csproj              # Project file
```
