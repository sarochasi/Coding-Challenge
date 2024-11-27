# Zephyrus-coding

## Task 1: Responsive Webpage

### Project Overview

This project focuses on creating a responsive, multi-section webpage with modern design principles. It includes a header, navigation bar, main content section, and footer. Each section is fully responsive and designed to provide a clean user experience. A dark mode toggle is also implemented to enhance accessibility.

### Features

* Responsive Layout:
  * Utilized Flexbox to ensure proper alignment and responsiveness.
  * Designed sections to adapt seamlessly to different screen sizes.
* Multi-Section Navigation:
  * A navigation bar links to three sections: About, Projects, and Contact.
  * The navigation bar is centered and highlights the active section.
* Dark Mode Toggle:
  * Users can switch between light and dark themes with a button.
  * The toggle updates colors dynamically for all elements, including the header, main content, and footer.

### Libraries or Frameworks Used

* HTML: Structured the webpage using semantic HTML5 elements for better readability and maintainability.
* CSS: No external libraries; used native CSS with Flexbox for responsiveness.
* JavaScript: Vanilla JavaScript for dynamic interactions (e.g., section visibility, dark mode toggle).
* Google Fonts: Used Inter and Roboto for a modern typographic style.

### Steps to Set Up
1. Clone the Repository:
  * Open your terminal or command prompt.
  * Clone the repository using the following command:
    ```
    git clone https://github.com/sarochasi/Zephyrus-coding.git
    ```
2. Navigate to the Task 1 Folder:
  * Change to the Task 1 Folder:
    ```
    cd Zephyrus-coding/task1
    ```
3. Open the Project in Your Browser:
* Open the index.html file using your browser:
   * On macOS:
     ```
     open index.html
     ```
  * On Windows:
    ```
    start index.html
    ```
  * On Linux:
    ```
    xdg-open index.html
    ```
4. Explore the Features:
  * The webpage will load with the About section displayed by default.
  * Use the navigation bar to switch between sections.
  * Toggle between light and dark modes using the Dark Mode button.

<hr>

## Task 2: Dynamic Task Management Application

### Project Overview

The Dynamic Task Management Application is a full-stack web application that allows users to manage tasks effectively. Users can create, edit, delete, and view tasks with due dates and descriptions. The application is built with a modern frontend and a robust backend, leveraging RESTful APIs to handle dynamic operations.

### Features

* Add Tasks: Create new tasks with a title, description, and due date.
* Edit Tasks: Update existing tasks to change details or the due date.
* Delete Tasks: Remove tasks when no longer needed.
* View Tasks: Display a list of all tasks in a clean and modern user interface.
* Responsive Design: Works seamlessly on both desktop and mobile devices.


### Libraries or Frameworks Used

* Frontend:
  * HTML5: Structure and content of the application.
  * CSS3: Styling for a modern and responsive design.
  * JavaScript: Dynamic interactions and communication with the backend.
* Backend:
  * Node.js: Server-side runtime.
  * Express.js: Framework for building the RESTful API.
  * MySQL2: Library for interacting with the MySQL database.

### Steps to Set Up
* Prerequisites
  * MySQL: Ensure MySQL is installed and running.
  * Node.js: Install Node.js on your machine.
  * Git: Ensure Git is installed for cloning the repository.

1. Clone the Repository
  * Open your terminal or command prompt.
  * Clone the repository using the following command:
    ```
    git clone https://github.com/sarochasi/Zephyrus-coding.git
    ```
2. Navigate to the Task 2 Folder:
* Change to the Task 2 Folder:
    ```
    cd Zephyrus-coding/task2
    ```
* Install dependencies:
   ```
   cd /Users/sarochas/SD/Zephyrus-coding/task2/backend
   npm install
   ```
* Import the database schema:

  * Open a terminal and run:
   ```
   mysql -u root -p < task_management.sql
   ```
* Configure the .env file:
  * Create a .env file in the backend folder:
    ```
    touch .env
    ```
  * Add the Required Environment Variables Open the .env file in a text editor (e.g., VS Code or nano):
    ```
    PORT=8080
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=task_management
    ```
  * Save the .env File
* Start the backend server:
   ```
   npm start
   ```
3. Frontend Setup
* Navigate to the frontend folder:
  ```
  cd ../frontend
  ```
* Open the index.html file using your browser:
   * On macOS:
     ```
     open index.html
     ```
  * On Windows:
    ```
    start index.html
    ```
  * On Linux:
    ```
    xdg-open index.html
    ```
4. Explore the Features:
* Open the application in your browser.
* Add a task by filling out the form and clicking "Save Task."
* Edit or delete tasks using the buttons next to each task.
* View all tasks in a modern, responsive interface. 

<hr>

## Task 3: Real-Time Data Fetching and Display

### Project Overview

This project is a web application built with Angular that allows users to fetch and display real-time data from an external API. It features a clean and responsive design, and focuses on simplicity and usability.

### Features

* Responsive Navbar: A navigation bar for easy access to different sections of the app (Home and Posts).
* Home Page: A welcoming home page with a clean and modern design to engage users.
* Real-Time Data Fetching:
  * Fetches data dynamically from the JSONPlaceholder API.
  * Displays the data in a structured, styled table format.
  * Includes a search bar for filtering posts by title.
  * Handles API errors gracefully with user-friendly messages.
* Responsive Design: Ensures usability across various devices, including desktops, tablets, and mobile phones.
* The Posts Page implements the following:
  * Fetch Data: Retrieves data from the https://jsonplaceholder.typicode.com/posts API.
  * Display Data: Presents the data in a structured, styled table with hover effects.
  * Search and Filter: Enables users to search posts by title dynamically.
  * Error Handling: Displays error messages if the API call fails.
  * Responsive Layout: Aligns with the app's color theme and ensures a clean look on all devices.
 
### Libraries or Frameworks Used

* Angular: A powerful framework for building dynamic web applications.
* Bootstrap: For responsive and modern UI components.
* Bootstrap Icons: To enhance the visual appeal of the application.
* RxJS: For handling asynchronous data streams.
* JSONPlaceholder API: A free REST API for testing and prototyping.

### Steps to Set Up

1. Clone the Repository
  * Open your terminal or command prompt.
  * Clone the repository using the following command:
    ```
    git clone https://github.com/sarochasi/Zephyrus-coding.git
    ```
2. Navigate to the Task 3 Folder:
* Change to the Task 3 Folder:
    ```
    cd Zephyrus-coding/task3/real-time-data-fetching
    ```
* Install dependencies:
   ```
   npm install
   ```
3. Run the Development Server:
   ```
   ng serve
   ```
   * Open your browser and navigate to http://localhost:4200.
4. View the Application:
* Visit the Home Page for a welcoming introduction.
* Navigate to the Posts Page to see real-time data fetching in action.
