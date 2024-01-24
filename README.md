# React Chat Application

This is a simple chat application built with React on the front end and Express on the back end. The front end utilizes the `react-chat-engine-pretty` library for a visually appealing chat window.

## Frontend

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

### Components

#### 1. App.jsx

The main entry point for the React application. It renders either the `AuthPage` or `ChatsPage` component based on user authentication status.

#### 2. AuthPage.jsx

Allows users to set a username to get started. Sends a request to the backend to authenticate the user.

#### 3. ChatsPage.jsx

Displays a chat window using the `PrettyChatWindow` component from `react-chat-engine-pretty`. Requires a Chat Engine project ID, username, and secret for authentication.

#### 4. App.css

Stylesheet containing the background styling and form styling.

## Backend

### Installation

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the backend server:

   ```bash
   npm start
   ```

### Backend API

#### Endpoint: `/authenticate` (POST)

- **Input:**
  - `username`: The desired username for authentication.

- **Functionality:**
  - Authenticates the user by making a request to the Chat Engine API.
  - Creates a user with the provided username and a secret (which is set as the username).
  - Responds with the user data.

### Backend Configuration

The backend is configured with CORS support and uses the `axios` library for making HTTP requests.

## Background Styling

The application includes background styling with a gradient and an image.

Feel free to explore and enhance the features of this chat application!
