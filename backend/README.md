# Barbell Fitness — Backend

Express + MongoDB (Mongoose) + JWT auth. Designed for a MERN stack — just paste
your MongoDB connection string and run.

## 1. Install

```bash
cd backend
npm install
```

## 2. Configure

```bash
cp .env.example .env
```

Open `backend/.env` and paste your **MongoDB connection string** into `MONGO_URI`.

- MongoDB Atlas: `mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/barbell`
- Local: `mongodb://127.0.0.1:27017/barbell`

Also set a strong `JWT_SECRET`.

## 3. Run

```bash
npm run dev      # auto-reload (nodemon)
# or
npm start
```

Server boots on `http://localhost:5000`.

## 4. Connect the frontend

In the project root create a `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

Restart the frontend. The Login / Signup pages will now talk to this backend.

## API

| Method | Endpoint              | Auth | Description              |
|-------:|-----------------------|:----:|--------------------------|
| GET    | `/api/health`         |  —   | Health check             |
| POST   | `/api/auth/register`  |  —   | `{ name, email, password }` |
| POST   | `/api/auth/login`     |  —   | `{ email, password }`    |
| GET    | `/api/auth/me`        | ✅   | Current user             |
| GET    | `/api/users/me`       | ✅   | Profile                  |
| PATCH  | `/api/users/me`       | ✅   | Update profile           |

Send the JWT as `Authorization: Bearer <token>` on protected routes.

## Project structure

```
backend/
├── src/
│   ├── server.js              # Express app + boot
│   ├── config/db.js           # Mongo connection
│   ├── models/User.js         # User schema (bcrypt hashing)
│   ├── controllers/           # Route handlers
│   ├── routes/                # Express routers
│   └── middleware/            # auth (JWT), error handling
├── .env.example
└── package.json
```
