# FastAPI-Node (Backend API)

This repository contains a RESTful API developed with Node.js, designed to implement authentication patterns and database management.

## 🚀 Technical Features

* **Authentication**: Implementation of a secure login flow using Passport.js and JWT (JSON Web Tokens).
* **Security**: Password hashing and verification management.
* **Database**: Integration of Sequelize as an ORM for data administration.
* **Functionalities**:
    * CRUD operations for products and categories.
    * Integrated password recovery logic.
    * User profile and purchase order management.

## 🛠 Tech Stack

* **Runtime**: Node.js
* **Framework**: Express.js
* **ORM**: Sequelize
* **Security**: Passport.js, JWT, bcrypt
* **Infrastructure**: Docker Compose

## 📁 Project Structure

The project is organized following the principle of separation of concerns:

* **routes/**: Definition of API endpoints.
* **services/**: Business logic and processes.
* **db/**: Models and persistence configuration.
* **utils/**: Utilities for authentication and email sending.
