import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import session from "express-session";
import SequelizeStoreConstructor from 'connect-session-sequelize';
import db from "./config/database.js";

const SequelizeStore = SequelizeStoreConstructor(session.Store);

const store = new SequelizeStore({
  db: db,
  tableName: 'sessions'
})

//initialize the store
store.sync();

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(session({
  secret: 'sdfhkjHkjhahafhhfkjhkjs',
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: { maxAge: 60 * 60 * 1000 }
}));
app.use(router);

app.listen(8080, () => console.log("Server running at port 8080"));
