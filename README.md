# My-Shopping-List

### Shopping List App Documentation

## Overview

This is a simple Shopping List application built using AngularJS+Node.js+Express.js. It allows users to add, remove, and search for items in their shopping list and storing the list data to a relational db.

## Technologies Used

- **AngularJS (1.6.9):** Front-end JavaScript framework for building the application.
- **Node.js and Express.js:** Backend JavaScript runtime and web application framework.
- **HTML and CSS:** Markup and styling languages for structuring and styling the user interface.
- **SQLite:** Relational database management system for storing shopping list data.
- **Visual Studio Code (VS Code):** Integrated Development Environment (IDE) used for coding and debugging.


## How to Run

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AndreeaDraghici/My-Shopping-List.git
   cd My-Shopping-List
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```


3. **Run the Application:**
   ```bash
   node server.js
   ```

Open your browser and navigate to http://localhost:5500.

4. **Extensions (Optional):**

    Install the "Live Server" extension in VS Code for a quick and easy way to run the application locally.

## Development Environment

Visual Studio Code (VS Code):
- Visual Studio Code (VS Code): Integrated Development Environment (IDE) used for coding and debugging.


- SQLite Browser: A visual interface for managing SQLite database.

## Features

- Add Items:

    Users can add items to the shopping list.


- Remove Items:

    Users can remove items from the shopping list with a confirmation prompt.


- Search and Filter:

    Users can search and filter items in the shopping list.


- Error Handling:

    The application provides error messages for empty input, duplicate items, and empty search terms.


- Backend Server:

    The application uses Node.js and Express.js to provide a backend server for handling API requests and interacting with the SQLite database.


- Database (SQLite):

    The shopping list items are stored in an SQLite database. The database file is named list_database.db.



## Notes

- Make sure you have Node.js installed on your machine before running the application.


- The database is automatically created if it doesn't exist when the application starts.


- Check the console for server logs and potential errors during development.


- You can use the "Live Server" extension in VS Code for a quick and easy way to run the application locally during development.
