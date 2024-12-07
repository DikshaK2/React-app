# Role-Based Access Control (RBAC) UI

This project implements a dynamic Role-Based Access Control (RBAC) interface that allows administrators to manage users, roles, and permissions. The project includes features such as user and role management, dynamic permission handling, and a mock API simulation to test CRUD operations.

## Table of Contents
Getting Started
Available Scripts
Project Structure
Technologies Used
Testing
Learn More
Getting Started
To get started with the project, follow the steps below.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
NPM Scripts
In the project directory, you can run the following commands:

## npm test
Launches the test runner in interactive watch mode.
For more details, refer to the testing documentation.

## npm run build
Builds the app for production to the build folder.
This command optimizes the build for performance and minifies the code, ready for deployment.

## npm run eject
Note: This is a one-way operation. Once you eject, you cannot undo it.
If you want to customize the build tool and configuration (webpack, Babel, ESLint, etc.), run this command.

You can refer to the Create React App documentation for more details.

Project Structure
The project follows the structure outlined below:

role-based-access-control-ui/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/         # Reusable components (Navbar, HomePage, etc.)
│   ├── context/            # React Context for managing theme state
│   ├── sections/           # Main content sections (User Management, Role Management, etc.)
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the React application
│   └── tailwind.config.js  # Tailwind CSS configuration
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation

## Technologies Used
React.js for building the user interface
Tailwind CSS for styling (responsive design and custom animations)
React Router for routing and navigation
React Context API for theme management (light/dark modes)
Mock API Simulation for CRUD operations on users and roles
Jest and React Testing Library for testing
Testing

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
