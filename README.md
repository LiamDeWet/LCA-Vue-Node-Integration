# TechVibe

## Description

TechVibe is a product catalogue application built for an online store. It combines a Vue 3 frontend with a Node.js and Express API to display, add, and delete products without requiring a page reload.

## Tech Stack

- **Node.js** - JavaScript runtime used to run the backend server.
- **Express** - Web framework used to create the REST API and routes.
- **Vue 3** - Frontend framework used to build the interactive product catalogue.
- **Vite** - Development and build tool used to run the Vue application.
- **Axios** - HTTP client used by Vue to communicate with the Node.js API.
- **CORS** - Middleware that allows the Vue frontend to communicate with the Node.js backend.
- **dotenv** - Loads environment variables from the `.env` file.

## Prerequisites

Before running the project, make sure you have:

- Node.js installed.
- npm available in the terminal.
- A `.env` file in the server root.
- The Node.js API running on port 3000.

## Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=3000
```

## Installation

Clone the repo
`git clone https://github.com/your-username/LCA-Vue-Node-Integration.git`

Go to the project
`cd week4_ex02_vue_api_integration`

Install the server dependencies
`cd server`
`npm install`

Install the Vue frontend dependencies
`cd ../client`
`npm install`

## How to run

Open a Terminal Windows in the server folder
then run:
`npm start`

The API will run on
`http:localhost:3000`

Start the Vue frontend in another Terminal Window
`cd client`
`npm run dev`

The Vue app will be on:
`http:localhost:5173`

Now test the app in your browser

## Author Liam De Wet
