# Contact Form API

A simple Node.js API for receiving contact form submissions and sending them as emails.

## Features

*   Receives contact form submissions via POST request.
*   Validates the input data.
*   Sends an email with the submission details.
*   Includes rate limiting middleware.

## Technologies

*   Node.js
*   Express.js
*   Nodemailer
*   dotenv
*   express-rate-limit

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    cd contact-form-api
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    Create a `.env` file in the root directory and add the following variables:

    
    PORT=3000
    EMAIL_HOST=<your_email_host>
    EMAIL_PORT=<your_email_port>
    EMAIL_USER=<your_email_address>
    EMAIL_PASS=<your_email_password>
    RECIPIENT_EMAIL=<recipient_email_address>
    

4.  Start the server:

    
    npm start
    

## API Endpoints

*   `POST /api/contact`: Receives contact form submissions.

## Request Body for /api/contact


{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "Hello, I have a question."
}


## Example Usage


curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john.doe@example.com", "message": "Hello, I have a question."}' http://localhost:3000/api/contact
