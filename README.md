# blog-app-mysql
A full-stack blog application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with user authentication, post creation, update, deletion, and proper access control.
 Features
-  User Registration & Login (JWT Auth)

-  Create, Read, Update, and Delete Posts

 - Each post linked to a registered user

- Only post owners can edit or delete their posts

   # Tech Stack
- Frontend: React.js, Axios, React Router
- Backend: Node.js, Express.js
- Database:  Mysql with Sequelize 
- Authentication: JSON Web Token (JWT)
 #  API Endpoints
# Auth
- Method	- Endpoint	Description
- POST- 	/api/auth/register	Register user
- POST- 	/api/auth/login	Login user, returns JWT

# Posts (protected by JWT)
- Method-	Endpoint-	Description
- GET	/api/posts	Get all posts
- POST	/api/posts	Create a new post
- PUT	/api/posts/:id	Update a post
- DELETE	/api/posts/:id	Delete a post

