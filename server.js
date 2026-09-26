
const express = require("express");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const app = express();
const port = process.env.PORT || 3000;

function AzureBank() {
  return React.createElement(
    "html",
    null,
    React.createElement(
      "head",
      null,
      React.createElement("title", null, "Azure Bank"),
      React.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }),
      React.createElement("style", null, `
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f7fb;
          color: #172033;
        }

        .header {
          background: linear-gradient(135deg, #0078d4, #005a9e);
          color: white;
          padding: 28px 50px;
        }

        .header h1 {
          margin: 0;
          font-size: 32px;
        }

        .header p {
          margin: 8px 0 0;
          opacity: 0.9;
        }

        .container {
          max-width: 1100px;
          margin: 40px auto;
          padding: 0 25px;
        }

        .welcome {
          margin-bottom: 30px;
        }

        .welcome h2 {
          margin-bottom: 8px;
        }

        .welcome p {
          color: #667085;
        }

        .operations {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          border-radius: 14px;
          padding: 25px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
          border: 1px solid #e5e7eb;
        }

        .icon {
          font-size: 34px;
          margin-bottom: 15px;
        }

        .card h3 {
          margin: 0 0 10px;
        }

        .card p {
          color: #667085;
          min-height: 45px;
          line-height: 1.5;
        }

        button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #0078d4;
          color: white;
          font-size: 15px;
          cursor: pointer;
        }

        button:hover {
          background: #005a9e;
        }

        .footer {
          text-align: center;
          margin-top: 45px;
          color: #667085;
          font-size: 13px;
        }
      `)
    ),
    React.createElement(
      "body",
      null,
      React.createElement(
        "div",
        { className: "header" },
        React.createElement("h1", null, "Azure Bank"),
        React.createElement(
          "p",
          null,
          "Secure digital banking built on Azure"
        )
      ),

      React.createElement(
        "div",
        { className: "container" },

        React.createElement(
          "div",
          { className: "welcome" },
          React.createElement("h2", null, "Banking Services"),
          React.createElement(
            "p",
            null,
            "Manage your account using Azure Bank's digital banking services."
          )
        ),

        React.createElement(
          "div",
          { className: "operations" },

          React.createElement(
            "div",
            { className: "card" },
            React.createElement("div", { className: "icon" }, "💰"),
            React.createElement("h3", null, "Balance Enquiry"),
            React.createElement(
              "p",
              null,
              "Check your current account balance."
            ),
            React.createElement("button", null, "Check Balance")
          ),

          React.createElement(
            "div",
            { className: "card" },
            React.createElement("div", { className: "icon" }, "📥"),
            React.createElement("h3", null, "Deposit Money"),
            React.createElement(
              "p",
              null,
              "Deposit funds into your bank account."
            ),
            React.createElement("button", null, "Deposit")
          ),

          React.createElement(
            "div",
            { className: "card" },
            React.createElement("div", { className: "icon" }, "📤"),
            React.createElement("h3", null, "Withdraw Money"),
            React.createElement(
              "p",
              null,
              "Withdraw money from your available balance."
            ),
            React.createElement("button", null, "Withdraw")
          ),

          React.createElement(
            "div",
            { className: "card" },
            React.createElement("div", { className: "icon" }, "🔄"),
            React.createElement("h3", null, "Transfer Money"),
            React.createElement(
              "p",
              null,
              "Transfer funds between bank accounts."
            ),
            React.createElement("button", null, "Transfer")
          )
        ),

        React.createElement(
          "div",
          { className: "footer" },
          "Azure Bank • Powered by Microsoft Azure"
        )
      )
    )
  );
}

app.get("/", (req, res) => {
  const html =
    "<!DOCTYPE html>" +
    renderToStaticMarkup(React.createElement(AzureBank));

  res.send(html);
});

app.listen(port, () => {
  console.log(`Azure Bank frontend listening on port ${port}`);
});

