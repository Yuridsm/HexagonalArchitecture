# Study project of hexagonal architecture with Clean Architecture and Domain-Driven Design using Test-Driven Development
This is a study project focused on software architecture. We will use the `Hexagonal Architecture`, also known as Ports and Adapters, which aims to separate business logic from the rest of the application, as well as being easily testable and flexible for changes.

In addition, we will use the principles of `Clean Architecture`, which proposes the separation into layers of responsibilities and the `inversion of dependencies`, making the system more modular, decoupled and easy to maintain.

With `Domain-Driven Design`, we will map the domain of the application, defining business rules, entities and valuing the ubiquitous language, which is a set of common terms and concepts between business experts and developers.

And, to ensure the quality of the code, we will use the `Test-Driven Development` technique, writing tests before implementing the code and ensuring that the application works correctly at all times.

The project will be developed using the `Typescript` programming language, and the technologies used will be `nodeJS v18.16.0`.

# How to use
To use this project, you must follow the following steps:

- Have to
[insert here the instructions to download and run the application]
[insert here the instructions to run the tests]

# Project structure
The project will be divided into [insert here the layers of the hexagonal architecture] and will follow the following folder structure:

```bash
/app
    /domain
        /models
        /repositories
        /services
    /usecases
    /adapters
        /entrypoints
        /gateways
        /presenters
/tests
```

- domain: contains business rules, entities, services, and repository interfaces.
- usecases: contains the application use cases, which use domain interfaces to perform operations.
- adapters: contains the input and output adapters of the application, as well as presenters, which are responsible for formatting information for display.
- tests: contains unit and integration tests of the application.

# Contribution
Feel free to contribute to this project, just follow the following guidelines:

Fork the project;
Create a new branch with the feature to be added;
Make the necessary changes and write the corresponding tests;
Make sure all tests are passing;
Send a pull request to the original repository.
Thank you for your contribution!