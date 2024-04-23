import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import UserRoutes from "./Users/routes.js";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import QuizzesRoutes from "./Kanbas/quizzes/routes.js"
import cors from "cors";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const DB_NAME = process.env.DB_NAME;

// mongoose.connect(CONNECTION_STRING, { dbName: DB_NAME });
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }),
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  proxy: true,
  cookie: {
    sameSite: "none",
    secure: true,
    domain: "https://kanbas-node-server-app-project-hhqs.onrender.com",
  },
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
QuizzesRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
