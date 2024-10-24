Here's an updated version of the `README.md` file that includes the code examples for registering and logging in as a user, as well as adding a user with an admin role:

---

# E-commerce API

This is an E-commerce API built with Node.js, Express, and MongoDB, providing functionality for user authentication, category and product management, and admin-only operations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Example Code](#example-code)
  - [Register User](#register-user)
  - [Login User](#login-user)
  - [Register Admin](#register-admin)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contact](#contact)

## Features

- User registration and login with JWT-based authentication.
- Role-based access control with user and admin roles.
- Admin-only access to certain endpoints (e.g., getting all users, deleting users).
- CRUD operations for products and categories.
- Data validation using `express-validator`.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/Paulhfe/e-commerce-api.git
   cd e-commerce-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   This will install all the necessary dependencies.

3. **Set up environment variables**:
   
   Create a `.env` file in the project root and add the following:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Replace `your_mongodb_connection_string` and `your_jwt_secret_key` with your actual MongoDB connection string and JWT secret key.

4. **Build the TypeScript code**:

   ```bash
   npm run build
   ```

## Usage

1. **Start the server**:

   ```bash
   npm start
   ```

   The server will run at `http://localhost:5000`.

2. **Access API endpoints** using Postman or any other API testing tool.

## API Endpoints

Here are the available endpoints in the E-commerce API:

### Auth

- **Register**: `POST /api/auth/register`
  - **Request Body**: `{ "username": "string", "email": "string", "password": "string", "role": "user" | "admin" }`
  - **Response**: Creates a new user and returns a token.

- **Login**: `POST /api/auth/login`
  - **Request Body**: `{ "email": "string", "password": "string" }`
  - **Response**: Authenticates the user and returns a token.

### Users (Admin Only)

- **Get all users**: `GET /api/auth/`
  - **Headers**: `Authorization: Bearer <token>`
  - **Response**: Returns a list of all registered users.

- **Delete user**: `DELETE /api/auth/delete/:id`
  - **Headers**: `Authorization: Bearer <token>`
  - **Response**: Deletes the specified user.

### Categories

- **Add category**: `POST /api/categories/`
  - **Request Body**: `{ "name": "string" }`
  - **Response**: Creates a new category.

- **Get all categories**: `GET /api/categories/`
  - **Response**: Returns a list of all categories.

### Products

- **Add product**: `POST /api/products/`
  - **Request Body(JSON)**: 
    {
      "name": "Product Name",
      "description": "Product description goes here",
      "price": "number",
      "category": "CategoryID",
      "quantity": "number"
    }
  - **Response**: Creates a new product with the provided details.


- **Get all products**: `GET /api/products/`
  - **Response**: Returns a list of all products.

- **Delete product**: `DELETE /api/products/delete/:id`
  - **Response**: Deletes the specified product.

## Example Code

### Register User

To register a new user, use the following code snippet:

```javascript
// POST /api/auth/register
{
  "username": "User123", //Use a username of your choice
  "email": "user123@example.com", //Use an email of your choice
  "password": "password123", //Use a password of your choice
  // Note: If role is not provided, default role is 'user'
}
```

This will create a new user with the default role of "user". The API will return a token that can be used for further authentication.

### Login User

To log in as a user, use the following code snippet:

// POST /api/auth/login
{
  "email": "user123@example.com",
  "password": "password123"
}
```

The API will return a token upon successful authentication. Use this token for authenticated requests.

### Register Admin

To register a user with the admin role, use the following code snippet:

```javascript
// POST /api/auth/register
{
  "username": "AdminUser", //Use a username of your choice
  "email": "admin@example.com", //Use an email of your choice
  "password": "adminPassword123", //Use a password of your choice
  "role": "admin" // Explicitly set role to 'admin'
}
```

Make sure to specify `"role": "admin"` when creating an admin account. The API will return a token that should be used for admin-only operations.

## Technologies Used

- **Node.js** - JavaScript runtime environment.
- **Express.js** - Web framework for Node.js.
- **MongoDB** - NoSQL database.
- **Mongoose** - MongoDB object modeling for Node.js.
- **TypeScript** - Superset of JavaScript that adds static types.
- **JWT (jsonwebtoken)** - Token-based authentication.
- **bcryptjs** - Library for hashing passwords.
- **express-validator** - Middleware for data validation.

## License

This project is licensed under the MIT License.

## Contact

- **GitHub**: [Paulhfe](https://github.com/Paulhfe)
- **Project Repository**: [E-commerce API](https://github.com/Paulhfe/e-commerce-api)

Feel free to contribute to this project by opening issues or submitting pull requests!

---

Let me know if you need any adjustments or additional details!

## Additional Notes

- **Node version**: Ensure you have Node.js installed (recommended version: LTS)
- **Dependencies**: All dependencies can be installed with `npm install`.
- **TypeScript Compilation**: TypeScript files are compiled into the `dist` folder.

---
