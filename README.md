# Tour Management System

Welcome to the Tour Management System, a web application built using Node.js and Express.js that allows users to book, edit, delete tours, and view booking history.

## Installation and Run Instructions

1. Clone the Repository:

    ```bash
    git clone [https://github.com/Laura902l/assWeb2.git](https://github.com/Laura902l/ass1/tree/main.git)
    cd assWeb2
    ```

2. Install Dependencies:

    ```bash
    npm install
    ```

3. Run the Application:

    ```bash
    npm start
    ```

    The application will run on http://localhost:3000.

## File Structure

The project has the following structure:

- `public`: Contains static files.
- `routes`: Handles route logic.
- `views`: Contains HTML templates.

## HTML Template

The HTML template (`views/history.ejs`) uses Bootstrap for a clean and responsive design. It includes a navigation bar for easy navigation and a footer displaying the group name.

## Express Server (server.js)

The server runs on the default port 3000. The logic for the travel agency is implemented in the `/travelagency` route, handling GET, POST, PUT, DELETE requests. Optionally, the code is organized by separating routes into a separate file (`routes/travelRoutes.js`).

## NPM Packages Integration

Two NPM packages related to the project are integrated:

- **Axios**: Used for making HTTP requests to the OpenWeatherMap API for weather information.
- **Bootstrap**: Integrated for styling and responsiveness.

## Enhanced UI

- Additional select fields for country, hotel, date arrival, date departure, and quantity of persons (adult and children) for comprehensive Tour editing.
- Dropdowns for selecting country and city, along with control buttons (view tour, add tour, delete tour, history).
- Updated Tour result displayed with a meaningful interpretation and enhanced style for a visually appealing interface.

## Tour History

- The application stores booking history in a JSON file structure.
- A history feature is implemented to store recently deleted Tours with timestamps.
- A route is created to view the history of Tours.

Feel free to explore and enjoy the Tour Management System!

