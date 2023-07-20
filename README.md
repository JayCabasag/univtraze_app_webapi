# UnivTaze App Web API

![UnivTaze Logo](https://example.com/univtaze_logo.png)

This repository contains the backend Web API for the UnivTaze App, built using Node.js and MySQL.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The UnivTaze App Web API serves as the backend for the UnivTaze educational platform. It provides endpoints for handling user authentication, course management, user enrollment, and more. The API is designed to work seamlessly with the UnivTaze frontend application to offer a smooth and efficient user experience.

## Features

- User registration and authentication.
- Course creation, deletion, and updating.
- Course enrollment and unenrollment.
- User profile management.
- ...

## Technologies Used

- Node.js
- Express.js
- MySQL
- ...

## Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/univtraze_app_webapi.git
```

2. Install dependencies:

```bash
cd univtraze_app_webapi
npm install
```

3. Configure the database:
   - Create a MySQL database and set up the necessary tables using the provided SQL script.

4. Configure environment variables:
   - Create a `.env` file in the root directory and set the following environment variables:

```
DB_HOST=<your_mysql_host>
DB_USER=<your_mysql_username>
DB_PASSWORD=<your_mysql_password>
DB_NAME=<your_mysql_database_name>
PORT=<port_number_for_server>
```

5. Start the server:

```bash
npm start
```

The API will be accessible at `http://localhost:<PORT>/`.

## API Endpoints

Here are the main API endpoints:

- `POST /api/register`: Register a new user.
- `POST /api/login`: User login.
- `GET /api/courses`: Get a list of available courses.
- `POST /api/courses`: Create a new course.
- `PUT /api/courses/:id`: Update a course by ID.
- `DELETE /api/courses/:id`: Delete a course by ID.
- `POST /api/enroll/:id`: Enroll in a course.
- `DELETE /api/enroll/:id`: Unenroll from a course.
- ...

Please refer to the API documentation for detailed information on each endpoint.

## Contributing

We welcome contributions to improve the UnivTaze App Web API. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Implement your feature or fix bugs.
4. Commit and push your changes: `git commit -m "Add feature or fix"`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to contact us at [contact@univtaze.com](mailto:contact@univtaze.com) with any questions or feedback.

Let's build a great educational platform together! 🚀
