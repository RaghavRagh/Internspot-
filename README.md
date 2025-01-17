# Internship Listing Website

A comprehensive platform for students to search, apply, and manage internships, bridging the gap between internship seekers and providers.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features
- User authentication with Google OAuth and JWT
- Custom avatar/profile picture upload
- Subscription plans with Razorpay integration
  - Free Plan: Apply to 1 internship per month
  - Bronze Plan: ₹100/month, apply to 3 internships
  - Silver Plan: ₹300/month, apply to 5 internships
  - Gold Plan: ₹1000/month, unlimited applications
- Track user login information and history
- Device-specific access controls

## Tech Stack
- **Frontend:** React.js, HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Google OAuth, JWT
- **Payment Integration:** Razorpay
- **Cloud:** AWS

## Installation

### Prerequisites
- Node.js
- MongoDB
- Vercel CLI (for deployment)

### Backend Setup
1. Clone the repository
    ```bash
    git clone https://github.com/RaghavRagh/Internspot
    cd backend
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory and add the following environment variables:
    ```
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    RAZORPAY_API_KEY=your_razorpay_api_key
    RAZORPAY_API_SECRET=your_razorpay_api_secret
    ```

4. Start the backend server
    ```bash
    npm run dev
    ```

### Frontend Setup
1. Navigate to the frontend directory
    ```bash
    cd ../frontend
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Start the frontend server
    ```bash
    npm run dev
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000` to access the website.
2. Sign up or log in using your Google account or phone.
3. Browse internships and apply based on your subscription plan.
4. Manage your applications and view login history from your profile.

### Backend


## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

### User
- `GET /user/profile` - Get user profile
- `POST /user/avatar` - Update user avatar

### Internships
- `GET /getInternships` - Fetch all internships
- `POST /apply/:internshipId` - Apply to an internship

### Payments
- `GET /getKey` - Get Razorpay API key
- `POST /payment` - Initiate payment
- `POST /paymentverification` - Verify payment# Internspot-
