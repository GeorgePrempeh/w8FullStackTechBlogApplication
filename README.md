# w8FullStackTechBlogApplication

A Tech Blog Application is a web-based platform designed for publishing, managing, and sharing blog posts specifically focused on technology-related topics.

---

## Features

- User registration, login, and logout
- Create, update, and delete your own blog posts
- Filter blog posts by category
- REST API backend (Node.js, Express, Sequelize, MySQL)
- Simple front-end for demo purposes

## Getting Started

### Installation

1. **Clone the repository** and navigate to the project directory.
2. **Copy `.env.example` to `.env`** and update your environment variables.
3. **Open MySQL and create the database:**
   ```bash
   mysql -u root -p
   CREATE DATABASE techblog_db;
   ```
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **Seed the database with test data:**
   ```bash
   npm run seed
   ```
6. **Run the application locally:**
   ```bash
   npm start
   ```
7. **Visit the application in your browser:**
   [http://localhost:3001](http://localhost:3001)

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/posts` - Get all posts (optionally filter by category)
- `POST /api/posts` - Create a post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post
- `GET /api/categories` - Get all categories

## Testing the API with Bruno

1. Download Bruno: [https://www.usebruno.com/](https://www.usebruno.com/)
2. Create a workspace and add requests for each endpoint above.
3. Example request (Register):
   ```json
   POST http://localhost:3001/api/auth/register
   {
     "username": "alice",
     "email": "alice@email.com",
     "password": "password123"
   }
   ```
4. Save your workspace and export it for submission if required.

## Demo Video Guide

- Show cloning the repo from your GeorgePrempeh GitHub account
- Setup `.env`, install dependencies, seed DB, start server
- Demonstrate registration, login, CRUD, and category filter (front-end or Bruno)
- Show your repo on GitHub and code structure
- Use OBS Studio, Loom, or Windows Game Bar for recording

## GitHub Account Verification

- Ensure your repo is public and under the GeorgePrempeh account
- Push all changes to `main` before recording
- Show your GitHub profile and repo in the demo video

## Deployment

- Deploy backend to [Render](https://render.com/)
- Use Render's MySQL or an external provider
- Update `.env` for production
- Deploy front-end as static site if needed

## Resources

- [Render Deployment Guide](https://render.com/docs/deploy-an-express-app)
- [Express Documentation](https://expressjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
