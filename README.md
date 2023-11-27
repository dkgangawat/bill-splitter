# Bill Splitter App

Welcome to the Bill Splitter App! This application allows users to efficiently manage and split expenses with friends.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Bill Splitter App simplifies the process of managing shared expenses among friends. It provides a user-friendly interface for tracking expenses, splitting bills, and settling debts within groups.

## Features

- **Login/Signup Feature:** Users can sign up for an account or log in using existing credentials. Bonus: Google OAuth for seamless login.

- **Friend Management:** Users can add friends using their email IDs.

- **Dashboard:** Displays the amount owed to the user and the amounts they owe to others.

- **Expense Management:** Users can add expenses, specifying the amount and the number of people to split the expense with. The application performs necessary calculations to determine each person's share.

- **Real-time Updates:** Friends see the amounts they owe or are owed when logged in.

- **Comments/Labels:** Users can add comments or labels to specify the reason for splitting the expense.

- **Settlement:** Mark expenses as "Settled" to hide owed amounts.

- **Activity History:** View the history of activities, including who owes what, what is owed, and settlement status.

- **Group Management:** Users can create groups for trips or hangouts, adding people and directly adding amounts owed within the group.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dkgangawat/bill-splitter.git

   ```

2. Navigate to the project root:
   ```bash
   cd bill-splitter
   ```
3. Install dependencies:

   ```bash
   # For the client (React/Vite app)
     cd client
    npm install

   # For the backend (Express.js server)
   cd ../backend
   npm install
   ```

# .env File

4. make sure to add the .env file in both client dir and backend dir
   The `.env` file is used to manage environment variables for the Bill Splitter App. It contains sensitive information and configuration details that should not be exposed in your version control system.

   # client .env file

   ```bash
   VITE_API_SERVER = "http://localhost:8000"
   ```

   # backend or server .env file

   ```bash
   MONGO_URI = "your-mongoDB-URI"
   JWT_SECRET_KEY = "Your-secrete-key-for-JWT"

   ```

## Usage

1.  Start the backend server:
    ```bash
    cd ../backend
    npm run dev
    ```
2.  Start the client application:
    ```bash
    cd ../client
    npm run dev
    ```

## Technologies Used

# Frontend:

React
Vite
Axios (for API communication)

# Backend:

Express.js
MongoDB
JWT for authentication
