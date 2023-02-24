# My graduation project

Built with node.js, React and MongoDB

# To start project:

VSCode Terminal: 
- Frontend: cd frontend npm start 
- Backend: cd backend npx nodemon

External Terminal: stripe listen --forward-to localhost:5000/api/stripe/webhook

# Requirements:

- Node v.18 or higher
- NPM v.8 or any other Node.js package manager

# Admin login

Email: admin@admin.se
Password: 123456

# 3 chosen obligated moments that are added in this project

- Routing and nice urls. All calls go through a dispatcher and controllers manage the url structure. 
- Different user levels must exist that affect access to functions. Some form of content must be linked to the respective user (orders, uploads, etc.)
- Connection to a payment solution