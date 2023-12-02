import express from "express";
import mysql from "mysql";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.get("/", (req, res) => {
  if (req.session.username) {
    return res.json({ valid: true, username: req.session.username });
  } else {
    return res.json({ valid: false });
  }
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
  const values = [req.body.username, req.body.email, req.body.password];
  db.query(sql, [values], (err, result) => {
    if (err) return res.status(404).send({ error: err });
    return res.status(200).send({ result });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE username = ? and password = ?";
  db.query(sql, [req.body.username, req.body.password], (err, result) => {
    if (err) return res.status(500).send({ error: err });
    if (result.length > 0) {
      req.session.username = result[0].username;
      return res.status(200).send({
        message: "Login successfully.",
        username: req.session.username,
      });
    } else {
      return res.status(401).send({ error: "User not found." });
    }
  });
});

app.listen(8081, () => {
  console.log("Connected to the server");
});
