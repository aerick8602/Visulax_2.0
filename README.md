# Visulax 2.0

Welcome to **Visulax 2.0** - the ultimate platform for algorithm visualization, now with integrated user authentication!!🔏✨

This is the updated version of the Visulax algorithm visualizer. Explore the previous version [here](https://github.com/aerick8602/Visulax-1.0).

### Live Preview https://visulax2.netlify.app

![](./frontend/images/demo/Screenshot%202024-06-18%20221759.png)_

<img src="" alt="Visulax 2.0 Demo" width="800">

## What's New?

### User Authentication API Integration:
- **Sign-Up** and **Sign-In** functionalities.
- Input Validation using Zod to ensure data integrity.
- Password Hashing for enhanced security using bcrypt.

![](./frontend/images/demo/Screenshot%202024-06-18%20194401.png)

 ### Enhanced Responsiveness
Visulax 2.0 is highly responsive, ensuring a seamless user experience across various devices.

<div style="display:flex; flex-direction:row; justify-content:flex-start; flex-wrap:wrap; gap:"10";>
    <img src="./frontend/images/demo/WhatsApp Image 2024-06-19 at 2.13.31 PM.jpeg" width="210" height="600">
    <img src="./frontend/images/demo/WhatsApp Image 2024-06-19 at 2.43.31 PM.jpeg" width="210" height="600">
    <img src="./frontend/images/demo/WhatsApp Image 2024-06-19 at 2.43.40 PM.jpeg" width="210" height="600">
    <img src="./frontend/images/demo/WhatsApp Image 2024-06-19 at 2.43.49 PM.jpeg" width="210" height="600">
    <img src="./frontend/images/demo/WhatsApp Image 2024-06-19 at 2.50.32 PM.jpeg" width="210" height="600">
</div>


### Endpoints:

#### Sign-Up:
- **URL:** `/signUp`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "name": "Your Name",
        "email": "your.email@example.com",
        "password": "YourPassword123"
    }
    ```
- **Response:**
    - **Success:** `{ "msg": "Sign Up Successful" }`
    - **User Already Exists:** `{ "msg": "User Already Exist" }`
    - **Validation Error:** `{ "msg": "Password must contain at least one uppercase letter and one number" }`

  <img src="./frontend/images/demo/Screenshot%202024-06-18%20183714.png" alt="Sign-Up Endpoint" width="600">

#### Sign-In:
- **URL:** `/signIn`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "email": "your.email@example.com",
        "password": "YourPassword123"
    }
    ```
- **Response:**
    - **Success:** `{ "msg": "Signing in successfully" }`
    - **Wrong Password:** `{ "msg": "Wrong password" }`
    - **User Not Found:** `{ "msg": "User not found" }`

  <img src="./frontend/images/demo/Screenshot%202024-06-18%20183811.png" alt="Sign-In Endpoint" width="600">

## Usage

- Navigate through different algorithm visualizations using the links provided on the main page.
- **Click on "Login" to access the admin panel**.
- Explore different sorting, searching, tree, graph, sieve of Eratosthenes, and recursion algorithms.
- Follow the instructions on each page to see how the algorithms work in real-time.

## Project Structure

```plaintext
Visulax/        
├── Authentication
│   ├── app.js
│   ├── connection
│   │   └── mongoose.js
├── ├──middlewares
│   │   ├── signIn.js          
│   │   └── signUp.js 
│   ├── model.js
│   ├── zod.js
├── frontend
│   ├── Container
│   │   ├── Components
│   │   │   ├── Graph
│   │   │   ├── Recursion
│   │   │   ├── Searching
│   │   │   ├── Sieve of Eratosthenes
│   │   │   ├── Sorting
│   │   │   ├── Tree
│   │   ├── Login
│   │   ├── Theme
│   ├── images
│   ├── index.css
│   ├── index.html
│   └── index.js
└── README.md
```

## Contributing
If you'd like to contribute additional visualizations or features, please feel free to fork the repository and submit a pull request 😁😁.
