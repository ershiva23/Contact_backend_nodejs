# Contact_backend_nodejs
Overview
This project is the backend for a Contact App, providing a RESTful API for managing contacts. The backend is built using  Node.js, Express, MongoDB. It allows for creating, reading, updating, and deleting contact information.

Features
Create new contacts
Retrieve a list of all contacts
Retrieve a single contact by ID
Update contact details
Delete a contact


API Endpoints
GET /contacts - Retrieve all contacts
GET /contacts/:id - Retrieve a contact by ID
POST /contacts - Create a new contact
PUT /contacts/:id - Update a contact by ID
DELETE /contacts/:id - Delete a contact by ID

.env
PORT=5001
CONNECTION_STRING=mongodb+srv://admin:shiva%40123@shivanshucluster.zf1htic.mongodb.net/?retryWrites=true&w=majority&appName=shivanshuCluster
ACCESS_TOKEN_SECERT=shivanshu@123
