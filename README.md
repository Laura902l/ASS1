# WEB Technologies 2 (Back End) - Assignment 1: Travel Agency
# Kazikhanova Laura
# SE-2209

## Introduction

Welcome to the Travel Agency Web Application! This project is a smart routing travel agency implemented using Express.js and Node.js. The goal is to provide a seamless experience for users to book, edit, and view tour information.

## Installation and Run Instructions

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Laura902l/ass1.git
    cd ass1

    ```

2. **Install
 Dependencies:**
    ```bash
    npm install
    ```

3. **Run the Application:**
    ```bash
    npm start
    ```

   The application will be accessible at http://localhost:3000.

## File Structure

The project follows a well-organized folder structure:

- `public`: Contains static files.
- `routes`: Handles route logic.
- `views`: Contains HTML templates.

## HTML Template

The HTML template (`views/index.html`) incorporates Bootstrap for a clean and responsive design:

- Professional-looking navigation bar.
- Footer section displaying your name and group name.

## Express Server (server.js)

- The server runs on the default port 3000.
- Optional: Code is organized by separating routes into a separate file (e.g., `routes/travelRoutes.js`).

## Travel Agency Logic

- `/` route serves the home page.
- `/travelagency` route handles both GET and POST requests.
- Logic for the travel agency is implemented in the core JS file.

## Integration of NPM Packages

- Utilizes at least two npm packages:
  - Axios for weather information from an API.
  - Faker for generating fake data for [another functionality].
- **Bootstrap**: Integrated for styling and responsiveness.
- Utilizes at least two npm packages:
  - Axios for weather information from an API.
- Faker for generating appropriate data.
  - Calculates the cost of the tour and displays it.
- Implements weather conditions of the chosen tour.
- Includes a history feature storing recently selected tours with timestamps.
- Creates a route to view the history of tours.

- Calculates the cost of the tour and displays it.
- Implements weather conditions of the chosen tour.
- Includes a history feature storing recently selected tours with timestamps.
- Creates a route to view the history of tours.

## Enhanced UI

- Additional input fields for country, hotel, date arrival, date departure, and quantity of persons (adult and children) for comprehensive tour calculation.
- Dropdowns for selecting country and city.
- Displays the calculated tour result with a meaningful interpretation.
- Styles the result for a visually appealing interface.

## Conclusion

Explore and enjoy the Travel Agency Web Application! If you encounter any issues or have suggestions for improvement, feel free to contribute. Happy traveling!
