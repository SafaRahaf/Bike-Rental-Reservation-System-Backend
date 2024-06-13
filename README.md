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

## 1/ USER RELATED

1. **SignUp:**

-Endpoint: POST /api/auth/signup (post)

-Request body:

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

-Response:

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

-Response:

```bash
{
  "name": "John Updated",
  "phone": "0987654321"
  //etc...
}

```

## 2/ BIKES RELATED

1. **Create Bike (Admin Only):**

-Endpoint: /api/bikes (POST)

-Request Headers: Authorization: Bearer jwt_token

-Request body:

```bash
{
  "name": "Mountain Bike",
  "description": "A durable mountain bike for rough terrains.",
  "pricePerHour": 15,
  "cc": 250,
  "year": 2022,
  "model": "X1",
  "brand": "Yamaha"
}
```

2. **Get All Bikes:**

-Endpoint: /api/bikes (GET)

```bash
{
"success": true,
"statusCode": 200,
"message": "Bikes retrieved successfully",
"data": [
{
"_id": "bike_id",
"name": "Mountain Bike",
"description": "A durable mountain bike for rough terrains.",
"pricePerHour": 15,
"isAvailable": true,
"cc": 250,
"year": 2022,
"model": "X1",
"brand": "Yamaha"
},
//...other bikes...
]
}

```

3. **Update Bike (Admin Only):**

-Endpoint: /api/bikes/:id (PUT)

-Request Headers: Authorization: Bearer jwt_token

-Request Body:

```bash
{
  "pricePerHour": 20
}
```

4. **Delete Bike (Admin Only):**

-Endpoint: /api/bikes/:id (DELETE)

-Request Headers: Authorization: Bearer jwt_token

-Response:

```bash
{
  "success": true,
  "statusCode": 200,
  "message": "Bike deleted successfully",
  "data": {
    "_id": "bike_id",
    "name": "Mountain Bike",
    "description": "A durable mountain bike for rough terrains.",
    "pricePerHour": 20,
    "isAvailable": false,
    "cc": 250,
    "year": 2022,
    "model": "X1",
    "brand": "Yamaha"
}

```

## 3/ RENTALS RELATED

1. **Create Rental:**

-Endpoint: /api/rentals (POST)

-Request Headers: Authorization: Bearer jwt_token

-Request body:

```bash
{
  "bikeId": "60d9c4e4f3b4b544b8b8d1c4",
  "startTime": "2024-06-10T09:00:00Z"
}
```

2. **Return Bike (Admin Only):**

-Endpoint: /api/rentals/:id/return (PUT)

-Request Headers: Authorization: Bearer jwt_token

-Response:

```bash
{
  "success": true,
  "statusCode": 200,
  "message": "Bike returned successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c4",
    "userId": "60d9c4e4f3b4b544b8b8d1c3",
    "bikeId": "60d9c4e4f3b4b544b8b8d1c4",
    "startTime": "2024-06-10T09:00:00Z",
    "returnTime": "2024-06-10T18:00:00Z",// Current time when returning the bike
    "totalCost": 135, // Calculated based on rental duration
    "isReturned": true
}

```

3. **Get All Rentals for User (My rentals):**

-Endpoint: /api/rentals (GET)

-Request Headers: Authorization: Bearer jwt_token

-Response:

```bash
{
  "success": true,
  "statusCode": 200,
  "message": "Rentals retrieved successfully",
  "data": [
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c4",
      "userId": "60d9c4e4f3b4b544b8b8d1c3",
      "bikeId": "60d9c4e4f3b4b544b8b8d1c4",
      "startTime": "2024-06-10T09:00:00Z",
      "returnTime": "2024-06-10T18:00:00Z",
      "totalCost": 135,
      "isReturned": true
    },
    ...other rentals...
  ]
}
```
3. **Middleres & Validation are added as it should** 