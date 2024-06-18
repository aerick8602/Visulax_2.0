# Visulax 2.0

Welcome to **Visulax 2.0** - the ultimate platform for algorithm visualization, now with integrated user authentication!!🔏✨

This is the updated version of the Visulax algorithm visualizer.Explore the previous version [here](https://github.com/aerick8602/Visulax-1.0).

### Watch the Introduction Video

[![Watch the video](./frontend/images/demo/Screenshot%202024-06-18%20221759.png)](https://www.youtube.com/watch?v=VIDEO_ID)
[](./frontend/images/demo/Screenshot%202024-06-18%20183714.png)
## What's New?

### User Authentication API Integration:
- **Sign-Up** and **Sign-In** functionalities.
- Input Validation using Zod to ensure data integrity.
- Password Hashing for enhanced security using bcrypt.
  
  ![](./frontend/images/demo/Screenshot%202024-06-18%20194401.png)
  

### Features:



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

[](./frontend/images/demo/Screenshot%202024-06-18%20183811.png)

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


 


## Usage

- Navigate through different algorithm visualizations using the links provided on the main page.
- **Click on "Login" to access the admin panel*.
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
