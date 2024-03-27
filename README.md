# My Vue.js To-Do List App

## Introduction
This is a simple web application built using Vue.js, allowing users to manage and interact with their to-do tasks as well as fetching and displaying cat facts from an external API. 

## Project Setup
To set up the project, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.

## Usage

### Development Mode
To run the project in development mode with hot-reloading, use the following command:

```
npm run serve
```


This will start a development server, allowing you to view and interact with the app in your browser.

### Production Build
To compile and minify the project for production, use:

```
npm run build
```

This command will generate a production-ready build of the application.

### Linting
To lint and fix code style issues, run:

```
npm run lint
```

This will ensure that your code follows best practices and conventions.

## Features

- **To-Do List**: The main page contains a list of to-do tasks that users can manage.
- **Add New To-Do**: Users can add new to-do tasks by providing a title and description.
- **Edit and Delete To-Do**: Each to-do item can be edited or deleted.
- **Favorite To-Do**: Users can mark to-do tasks as favorites and view them separately.
- **Cat Facts**: Users can import cat facts from an external API and create to-do items from them.
- **State Management**: Vuex is used for state management, with a store containing an array of to-do tasks.

## External API
The application fetches cat facts from the [Cat Facts API](https://alexwohlbruck.github.io/cat-facts/) and creates a to-do item for each fact imported.

## Contribution
Feel free to contribute to the project by submitting bug reports, feature requests, or pull requests. We welcome any feedback or suggestions for improvement.
