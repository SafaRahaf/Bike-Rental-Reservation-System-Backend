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

-Request body: (post)

```bash
{
"name": "John Doe",
"email": "john@example.com",
"password": "password123",
"phone": "1234567890",
"address": "123 Main St, Anytown",
"role" : "admin" // or you can create normal user "user" ( it depends what you wanna create )
}
```

2. **Login:**

-Request body: (post)

```bash
{
  "email": "john@example.com",
  "password": "password123"
}

```

after login you are going to get a token with this token u can create, update, and delete bikes ( only as admin ) & rentals
