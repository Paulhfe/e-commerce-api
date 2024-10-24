# E-Commerce API

Welcome to the E-Commerce API. This project is a backend server application built using Node.js, Express, and MongoDB. It includes essential functionality for user management, product and category handling, and admin controls.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Auth Routes](#auth-routes)
  - [User Routes](#user-routes)
  - [Product & Category Routes](#product--category-routes)
- [Admin Role](#admin-role)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login with JWT authentication
- Role-based access control (Admin vs. User)
- Admin-only access for user and product management
- CRUD operations for categories and products
- Password hashing for secure user credentials
- Data validation using Express Validator

## Installation

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/Paulhfe/e-commerce-api.git
   cd e-commerce-api
   ```

2. Install all dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and set the environment variables:

   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Start the server:

   ```bash
   npm run start
   ```

5. The server will run at `http://localhost:5000`.

## Configuration

- `PORT`: The port your server will run on. Default is `5000`.
- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for generating JWT tokens.

## API Endpoints

### Auth Routes

- **Register User**: `POST /api/auth/register`
- **Login User**: `POST /api/auth/login`

### User Routes

- **Get All Users** (Admin only): `GET /api/auth/`
- **Delete User** (Admin only): `DELETE /api/auth/delete/:id`

### Product & Category Routes

- **Add Category** (Admin only): `POST /api/categories`
- **Add Product** (Admin only): `POST /api/products`
- **Delete Product** (Admin only): `DELETE /api/products/:id`

## Admin Role

To perform admin actions, ensure you have a user with the role set to `admin`. Include the token in the headers when making admin requests:

```plaintext
Authorization: Bearer <your_token_here>
```

## Testing

Run the tests using:

```bash
npm run test
```

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **JWT** - JSON Web Token for secure authentication
- **TypeScript** - Typed JavaScript
- **bcryptjs** - Library for password hashing
- **Mongoose** - MongoDB ODM
- **Express Validator** - Middleware for validating user input
- **Jest** - Testing framework for JavaScript and TypeScript

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue to discuss what you would like to change.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Additional Notes

- **Node version**: Ensure you have Node.js installed (recommended version: LTS)
- **Dependencies**: All dependencies can be installed with `npm install`.
- **TypeScript Compilation**: TypeScript files are compiled into the `dist` folder.

---
