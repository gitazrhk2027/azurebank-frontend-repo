const express = require("express");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const App = require("./src/App");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const html =
    "<!DOCTYPE html>" +
    renderToStaticMarkup(
      React.createElement(App)
    );

  res.send(html);
});

app.listen(port, () => {
  console.log(`Azure Bank frontend listening on port ${port}`);
});