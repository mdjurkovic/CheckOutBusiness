const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const users = {
  password: "123",
  username: "admin",
};
let discounts = [
  {
    id: 0,
    code: "dis15",
    discount: "15%",
    validate: false,
  },
  {
    id: 1,
    code: "dis20",
    discount: "20%",
    validate: false,
  },
  {
    id: 2,
    code: "dis25",
    discount: "25%",
    validate: false,
  },
];

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/authenticate", (req, res) => {
  console.log(req.params);
  res.send(
    req.params.username === users.username &&
      req.params.password === users.password
  );
});

app.get("/discounts", (req, res) => {
  res.send(discounts);
});

app.put("/discounts/:id", (req, res) => {
  discounts[req.params.id]["validate"] = true;
  res.send(discounts);
});
