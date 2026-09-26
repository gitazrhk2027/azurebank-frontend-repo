const express = require("express");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const App = require("./src/App");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Deposit API
app.post("/api/deposit", async (req, res) => {
  try {
    const logicAppUrl = process.env.LOGIC_APP_URL;

    if (!logicAppUrl) {
      return res.status(500).json({
        error: "LOGIC_APP_URL is not configured"
      });
    }

    const response = await fetch(logicAppUrl, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(req.body)
    });

    const responseText = await response.text();

    if (!response.ok) {
      return res.status(response.status).send(responseText);
    }

    res.status(200).send(responseText);

  } catch (error) {
    console.error("Deposit API error:", error);

    res.status(500).json({
      error: "Deposit request failed"
    });
  }
});

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