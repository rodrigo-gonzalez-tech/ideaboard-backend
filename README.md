# Idea Board API

A RESTful backend API for creating, updating and sharing ideas.

This project was built as a learning exercise to gain hands-on experience with backend development using Node.js, Express and MongoDB. Throughout the project I implemented a complete CRUD API, user authentication with JSON Web Tokens (JWT), and authorization so users can only modify or delete their own ideas.

## Features

- Create, read, update and delete ideas
- User registration and login
- Password hashing with bcrypt
- JWT-based authentication
- Protected routes
- Ownership-based authorization
- MongoDB persistence with Mongoose
- Proper HTTP status codes and error handling

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv

## Project Structure

The project follows a simple MVC architecture:

- **Models** define the MongoDB schemas.
- **Controllers** contain the business logic.
- **Routes** define the API endpoints.
- **Middleware** handles authentication and request processing.

## API Endpoints

### Ideas

| Method | Endpoint         | Description                            |
| ------ | ---------------- | -------------------------------------- |
| GET    | `/api/ideas`     | Get all ideas                          |
| GET    | `/api/ideas/:id` | Get a specific idea                    |
| POST   | `/api/ideas`     | Create an idea _(authenticated)_       |
| PATCH  | `/api/ideas/:id` | Update your own idea _(authenticated)_ |
| DELETE | `/api/ideas/:id` | Delete your own idea _(authenticated)_ |

### Users

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| POST   | `/api/users/register` | Register a new user     |
| POST   | `/api/users/login`    | Login and receive a JWT |

## What I learned

This project helped me practice:

- Designing RESTful APIs
- Organizing an Express application using the MVC pattern
- Working with MongoDB and Mongoose
- Implementing JWT authentication
- Password hashing and secure credential storage
- Authorization using resource ownership
- Error handling and HTTP status codes
