<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# IronCart - Gym Clothing & Accessories E-Commerce App

A full-stack e-commerce web application for gym clothing and accessories, built with **Spring Boot**, **MySQL**, and **React**.


## Features
- Product listing with search, price filter, and sorting
- Product images served from the database
- Shopping cart and wishlist using React Context and useReducer
- Checkout page with payment method selection
- Login and sign-up with protected routes
- Responsive UI with sticky navbar and hero section


## Project Structure
IronCart/
├── backend/        Spring Boot REST API
├── frontend/       React application
└── screenshots/    App screenshots


## How to Run

### Prerequisites
- Java
- Node.js
- MySQL

### 1. Clone the repository
```bash
git clone https://github.com/subhajitnaskar005/IronCart.git
cd IronCart
```

### 2. Set up the database
Create an empty database in MySQL:
```sql
CREATE DATABASE ironcart;
```
<!-- CHANGE: use your real database name -->

### 3. Run the backend
Open `backend/src/main/resources/application.properties` and set your MySQL username and password, or set the environment variables `DB_USER` and `DB_PASSWORD`.

```bash
cd backend
mvnw spring-boot:run
```
On Linux/Mac use `./mvnw spring-boot:run`.

The API starts on `http://localhost:8081`.  <!-- CHANGE: use your real port -->

### 4. Run the frontend
Open a second terminal:
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.



## What I Learned
- Building a layered REST API (Controller, Service, Repository) with Spring Boot
- Connecting a React frontend to a Spring Boot backend and handling CORS
- Managing cart and wishlist state with Context API and useReducer
- Mapping entities to MySQL tables with Spring Data JPA and Hibernate

## Future Improvements
- JWT-based authentication with Spring Security
- Real payment gateway integration
- Order history and admin dashboard
- Deployment with Docker


## Author
**Subhajit Naskar**
GitHub: [subhajitnaskar005](https://github.com/subhajitnaskar005)
>>>>>>> 73a652feec4bd0104a7fc2962b193923a9486077
