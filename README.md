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
