---
icon: pen-to-square
date: 2024-01-16
category:
  - backend
tag:
  - C#
  - Testing
  - TDD
  - Interview
---

# Testing

## What is TDD

Test-Driven Development(TDD) is a software development methodology in which tests are written before the actual code. The process involves writing a test for a specific functionality, then writing the minimal amount of code required to pass that test, and finally refactoring the code while ensuring that all tests still pass.

1. Creating Fixture in testing

In unit testing, a fixture refers to the fixed state of a set of objects used as a test data for running tests.

```csharp
    public static List<User> GetTestUsers() =>
        new()
        {
            new User
            {
                Name = "Test User 1",
                Email = "test.user.1@productivedev.com",
                Address = new Address
                {
                    Street = "123 Market St",
                    City = "Somewhere",
                    ZipCode = "213124"
                }
            },
            new User
            {
                Name = "Test User 2",
                Email = "test.user.2@productivedev.com",
                Address = new Address
                {
                    Street = "900 Main St",
                    City = "Somewhere",
                    ZipCode = "213124"
                }
            },
            new User
            {
                Name = "Test User 3",
                Email = "test.user.3@productivedev.com",
                Address = new Address
                {
                    Street = "108 Maple St",
                    City = "Somewhere",
                    ZipCode = "213124"
                }
            },
        };
```

2. Setup Mocked Handler
   In the `MockHttpMessageHandler.cs` file, we can defines a method `SetupBasicGetResourceList` that sets up a mocked `HttpMessageHandler` to simulate an Http Get request and return a predefined response.

```csharp
    internal static Mock<HttpMessageHandler> SetupBasicGetResourceList(List<User> expectedResponse, string endpoint)
    {
        var mockResponse = new HttpResponseMessage(System.Net.HttpStatusCode.OK)
        {
            Content = new StringContent(JsonConvert.SerializeObject(expectedResponse))
        };

        mockResponse.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");

        var handlerMock = new Mock<HttpMessageHandler>();
        var httpRequestMessage = new HttpRequestMessage
        {
            RequestUri = new Uri(endpoint),
            Method = HttpMethod.Get
        };

        handlerMock.Protected().Setup<Task<HttpResponseMessage>>("SendAsync", ItExpr.IsAny<HttpRequestMessage>(), ItExpr.IsAny<CancellationToken>()).ReturnsAsync(mockResponse);

        return handlerMock;
    }
```

3. Create HttpClient with Mocked Handler
   We can create an `HttpClient` instance using the mocked handler:

```csharp
var httpClient = new HttpClient(handlerMock.Object);
```

4. Pass HttpClient to Service
   We can pass this `HttpClient` instance using the mocked handler

```csharp
var sut = new UsersService(httpClient, config);
```

5. Service Method Execution
   When the service method calls `_httpClient.GetAsync(_apiConfig.Endpoint)`, the mocked handler intercepts the request and returns the predefined response:

```csharp
public async Task<List<User>> GetAllUsers()
{
    var usersResponse = await _httpClient.GetAsync(_apiConfig.Endpoint);

    if (usersResponse.StatusCode == HttpStatusCode.NotFound)
    {
        return new List<User>();
    }

    var responseContent = usersResponse.Content;
    var allUsers = await responseContent.ReadFromJsonAsync<List<User>>();
    return allUsers.ToList();
}
```

- `Mocked Handler`: The mocked `HttpMessageHandler` intercepts the HTTP request and returns a predefined response containing our test data.
- `Simulated Request`: The `HttpClient` behaves as if it received a real response from the network, but the response is generated by the mock.

## Seperation of Concern

In xUnit testing, separating the tests for `IUserService` and `IUserController` is important for several reasons:

1. `Separation of Concerns`:

- `Service Layer`: This layer contains the business logic and interacts with data sources(e.g., databases, external APIs). Testing this layer ensures that the business logic works correctly.
- `Controller Layer`: This layer handles HTTP requests, interacts with the service layer, and returns HTTP responses. Testing this layer ensures that the controller handles requests and responses.

2. `Isolation`:

- `Unit Testing`: Each test should focus on a single unit of work. By isolating the tests for `IUserService` and `IUserController`, we ensure that each test only verifies the behavior of the specific component under test without interference from other components.
- `Mocking Dependencies`: When testing `IUserController`, we can mock `IUserService` to control its behavior and focus on testing the controller logic. Similarly, when testing `IUserService`, we can mock its dependencies(e.g., repositories, external services).

3. `Maintainability`:

- `Clearer Tests`: Separate tests make it easier to understand what is being tested and why.
- `Easier Debugging`: when a test fails, it is easier to identify the source of the problem if the tests are well-isolated.

4. `Reusability`:

- `Reusable Services`: Services can be reused across different controllers or other services.
- `Flexible Controllers`: Controllers can be tested with different service implementations to verify their behavior in various scenarios.

## Moq
Moq is a popular mocking framework for .NET that allows us to create mock objects for unit testing. It helps us isolate the code under test by simulating the behavior of dependencies, such as services or repositories, without requiring the actual implementations.
