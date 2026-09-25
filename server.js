
const express = require("express");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const app = express();
const port = process.env.PORT || 3000;

function AzureBank() {
  return React.createElement(
    "div",
    { className: "page" },

    React.createElement(
      "nav",
      { className: "navbar" },
      React.createElement("div", { className: "logo" }, "AzureBank"),
      React.createElement(
        "div",
        { className: "nav-links" },
        React.createElement("span", null, "Dashboard"),
        React.createElement("span", null, "Accounts"),
        React.createElement("span", null, "Payments"),
        React.createElement("span", null, "Support")
      )
    ),

    React.createElement(
      "main",
      { className: "container" },

      React.createElement(
        "section",
        { className: "hero" },
        React.createElement(
          "div",
          null,
          React.createElement("p", { className: "eyebrow" }, "WELCOME TO AZUREBANK"),
          React.createElement(
            "h1",
            null,
            "Banking built for ",
            React.createElement("span", null, "the cloud.")
          ),
          React.createElement(
            "p",
            { className: "subtitle" },
            "A modern digital banking experience powered by Microsoft."
          ),
          React.createElement(
            "button",
            { className: "primary-button" },
            "Place Order"
          )
        ),

        React.createElement(
          "div",
          { className: "card balance-card" },
          React.createElement("p", { className: "card-label" }, "AVAILABLE BALANCE"),
          React.createElement("h2", null, "$24,850.75"),
          React.createElement(
            "div",
            { className: "account-number" },
            "Account •••• 4821"
          )
        )
      ),

      React.createElement(
        "section",
        { className: "cards" },

        React.createElement(
          "div",
          { className: "card feature-card" },
          React.createElement("div", { className: "icon" }, "↗"),
          React.createElement("h3", null, "Fast Payments"),
          React.createElement(
            "p",
            null,
            "Send and receive payments securely with Azure-powered services."
          )
        ),

        React.createElement(
          "div",
          { className: "card feature-card" },
          React.createElement("div", { className: "icon" }, "✓"),
          React.createElement("h3", null, "Secure Banking"),
          React.createElement(
            "p",
            null,
            "Identity, secrets and application security are managed using Azure."
          )
        ),

        React.createElement(
          "div",
          { className: "card feature-card" },
          React.createElement("div", { className: "icon" }, "☁"),
          React.createElement("h3", null, "Cloud Native"),
          React.createElement(
            "p",
            null,
            "Designed as a modern cloud application running on Microsoft Azure."
          )
        )
      )
    ),

    React.createElement(
      "footer",
      null,
      "AzureBank • Frontend running on Azure App Service"
    )
  );
}

app.get("/", (req, res) => {
  const content = renderToStaticMarkup(
    React.createElement(AzureBank)
  );

  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AzureBank</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #f4f7fb;
      color: #172033;
    }

    .page {
      min-height: 100vh;
    }

    .navbar {
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 8%;
      background: #ffffff;
      border-bottom: 1px solid #e7ebf2;
    }

    .logo {
      font-size: 25px;
      font-weight: 800;
      color: #1769e0;
    }

    .nav-links {
      display: flex;
      gap: 30px;
      color: #5b6578;
      font-size: 14px;
    }

    .container {
      width: 84%;
      max-width: 1150px;
      margin: 0 auto;
    }

    .hero {
      min-height: 440px;
      display: grid;
      grid-template-columns: 1.4fr 0.8fr;
      gap: 50px;
      align-items: center;
      padding: 70px 0;
    }

    .eyebrow {
      color: #1769e0;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 18px;
    }

    h1 {
      font-size: 58px;
      line-height: 1.05;
      letter-spacing: -2px;
      margin-bottom: 22px;
    }

    h1 span {
      color: #1769e0;
    }

    .subtitle {
      color: #697386;
      font-size: 18px;
      line-height: 1.6;
      max-width: 560px;
      margin-bottom: 30px;
    }

    .primary-button {
      border: none;
      border-radius: 10px;
      padding: 15px 26px;
      background: #1769e0;
      color: white;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
    }

    .primary-button:hover {
      opacity: 0.9;
    }

    .card {
      background: white;
      border-radius: 18px;
      box-shadow: 0 12px 35px rgba(35, 55, 90, 0.08);
    }

    .balance-card {
      padding: 34px;
      background: linear-gradient(145deg, #1769e0, #0b3f98);
      color: white;
      min-height: 220px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .card-label {
      font-size: 12px;
      letter-spacing: 1.5px;
      opacity: 0.8;
      margin-bottom: 15px;
    }

    .balance-card h2 {
      font-size: 36px;
      margin-bottom: 18px;
    }

    .account-number {
      font-size: 14px;
      opacity: 0.8;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding-bottom: 70px;
    }

    .feature-card {
      padding: 28px;
    }

    .icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: #eaf2ff;
      color: #1769e0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      margin-bottom: 20px;
    }

    .feature-card h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .feature-card p {
      color: #697386;
      line-height: 1.6;
      font-size: 14px;
    }

    footer {
      text-align: center;
      padding: 30px;
      background: white;
      color: #8992a3;
      font-size: 13px;
    }

    @media (max-width: 800px) {
      .nav-links {
        display: none;
      }

      .hero {
        grid-template-columns: 1fr;
        padding: 45px 0;
      }

      h1 {
        font-size: 42px;
      }

      .cards {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>
  ${content}
</body>
</html>
  `);
});

app.listen(port, () => {
  console.log(`AzureBank frontend listening on port ${port}`);
});

