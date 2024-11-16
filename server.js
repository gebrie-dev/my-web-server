const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/name", (req, res) => {
  res.send(" gebre wagnew mamay");
});

app.get("/hobby", (req, res) => {
  res.json({
    hobby:
      "My hobby is staying active by playing football and imagining myself as part of FC Barcelona",
  });
});

app.get("/dream", (req, res) => {
  res.send(
    "My dream is to become a skilled MERN stack developer, establish myself as a successful freelancer, and eventually build a thriving software company that creates impactful solutions for global challenges."
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
