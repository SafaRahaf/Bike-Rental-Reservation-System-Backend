# Bike rental service for tourists or locals.

## Project Overview

The Bike Rental System is a web application designed to facilitate the rental and return of bikes. Users can rent a bike for a specific period and return it when done. The system calculates the rental cost based on the duration of the rental.

## Features

- **User Authentication:** Secure login and registration for users.
- **Bike Availability:** Check bike availability.
- **Rental Management:** Rent a bike and return it with cost calculation. only allowed for admin
- **Admin Dashboard:** Manage bikes, rentals, and users.

## Technology Used

- **Backend:** Typescript (js)
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment:** vercel

## Setup Instructions

### Prerequisites

- Typescript
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SafaRahaf/Bike-Rental-Reservation-System-Backend.git
   ```

## here are some request and response for this site

1. **SignUp:**

-Endpoint: POST /api/auth/signup (post)

-Request body: (post)

```bash
{
"name": "John Doe",
"email": "john@example.com",
"password": "password123",
"phone": "1234567890",
"address": "123 Main St, Anytown",
"role" : "admin" // or "user"
}
```

2. **Login:**

-Endpoint: POST /api/auth/login (post)

-Request body:

```bash
{
  "email": "john@example.com",
  "password": "password123"
}

```

After login, you will receive a token. Use this token to create, update, and delete bikes and rentals (only as an admin).

3. **Get Profile:**

-Endpoint: /api/users/me (GET)

-Request Headers: Authorization: Bearer jwt_token

```bash
{
  "success": true,
  "statusCode": 200,
  "message": "User profile retrieved successfully",
  "data": {
    "_id": "6666ff917181b8e5ffe04f91",
    "name": "admin",
    "email": "admin@gmail.com",
    "phone": "1234567890",
    "address": "123 Main St, Anytown",
    "role": "admin",
    "createdAt": "2024-06-10T13:28:49.260Z",
    "updatedAt": "2024-06-10T13:28:49.260Z",
    "__v": 0
}

```

4. **Update Profile:**

-Endpoint: /api/users/me (PUT)

-Request Headers: Authorization: Bearer jwt_token

```bash
{
  "name": "John Updated",
  "phone": "0987654321"
  //etc...
}

```
