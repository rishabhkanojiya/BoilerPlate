const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

require("./db/mongoose");
require("./services/passport");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const authRouter = require("./routers/auth");

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
