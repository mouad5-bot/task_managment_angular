# TaskFlow NgRx Integration

TaskFlow is undergoing a robust and reactive transformation by integrating NGRX, a state management library for Angular applications. This integration aims to enhance application state management and streamline client-side data manipulation.

## Project Overview

The primary goal of this phase is to seamlessly integrate NGRX into the existing application. This integration will efficiently and consistently manage the application state and interactions with the backend.

## Features to Implement

### State Management with Store

- Create stores to manage different parts of the application (tasks, users, etc.).
- Define necessary actions for manipulating these stores (adding, deleting, updating tasks, etc.).

### Effects

- Use effects to handle interactions with the backend (API calls, error handling, etc.).
- Implement effects for task-related functionalities (CRUD operations, assignments, etc.).

### Action Redirection

- Configure reducers to process actions and update the global state appropriately.
- Manage side effects and update the state accordingly.

### Selectors

- Develop selectors to efficiently retrieve data from stores in components.

### Navigation Management

- Utilize the Router Store to handle navigation and maintain URL state in the store.

## Getting Started

1. Clone the repository using `git clone https://github.com/mouad5-bot/task_managment_angular.git`.
2. Install dependencies using `npm install`.
3. Run the application with `ng serve` or `npm start`.

Feel free to explore each directory to understand the project's organization.

## Contributing

If you'd like to contribute, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

