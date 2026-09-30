
const React = require("react");

const Header = require("./components/Header");
const Balance = require("./components/Balance");
const Deposit = require("./components/Deposit");

function App() {
  return React.createElement(
    "html",
    null,

    React.createElement(
      "head",
      null,

      React.createElement(
        "title",
        null,
        "Azure Bank"
      ),

      React.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }),

      React.createElement(
        "style",
        null,
        `
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: red;
          color: #172033;
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

        input {
          width: 100%;
          padding: 12px;
          margin: 10px 0 15px;
          border: 1px solid #d0d5dd;
          border-radius: 8px;
          font-size: 16px;
        }

        .footer {
          text-align: center;
          margin-top: 45px;
          color: white;
          font-size: 13px;
        }
        `
      )
    ),

    React.createElement(
      "body",
      null,

      React.createElement(Header),

      React.createElement(
        "div",
        { className: "container" },

        React.createElement(
          "div",
          { className: "welcome" },

          React.createElement(
            "h2",
            null,
            "Banking Services"
          ),

          React.createElement(
            "p",
            null,
            "Manage your account using Azure Bank's digital banking services."
          )
        ),

        React.createElement(
          "div",
          { className: "operations" },

          React.createElement(Balance),
          React.createElement(Deposit)
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

module.exports = App;

