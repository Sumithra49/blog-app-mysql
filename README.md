# blog-app-mysql
A full-stack blog application built using the  (MySql, Express.js, React.js, Node.js) with user authentication, post creation, update, deletion, and proper access control.
 # deployment link:
 - frontend:https://blog-app-mysql-k3n8.vercel.app/
 - backend:https://blog-app-mysql-4hrx.onrender.com

# folder structure
![image](https://github.com/user-attachments/assets/c806b8d7-cd1b-4b70-a383-fead1e40627a)

![image](https://github.com/user-attachments/assets/2fd52156-8bb8-4471-b8fa-ce765c8c5bf6)


#  Features
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

  ## 🛠 Export MySQL Database (optional)

To export your database safely using `mysqldump`:

```bash
mysqldump --set-gtid-purged=OFF --single-transaction \
  -h <your_host> \
  -u <your_username> \
  -p <your_database_name> > db-export.sql


  # All post

  ![image](https://github.com/user-attachments/assets/953b4504-d606-4d08-8580-b49ca15f281b)

  ![image](https://github.com/user-attachments/assets/0122aff8-795f-41e7-a78a-d86b80d6578c)
  ![image](https://github.com/user-attachments/assets/0fc9195f-2bf7-49ac-8ace-155a5c1fedb3)
  ![image](https://github.com/user-attachments/assets/727087ae-49d3-4938-8a20-a579ab5c262a)


  ![image](https://github.com/user-attachments/assets/6d67dc87-ccc2-48bb-94ff-08cccf1c4a48)


  ![image](https://github.com/user-attachments/assets/9bfdf092-28c6-4891-be08-0301a6f57858)

  


