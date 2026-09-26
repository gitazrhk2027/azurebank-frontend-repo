const React = require("react");

function Header() {
  return React.createElement(
    "div",
    {
      className: "header",
      style: {
        background: "linear-gradient(135deg, #0078d4, #005a9e)",
        color: "white",
        padding: "28px 50px"
      }
    },

    React.createElement(
      "h1",
      {
        style: {
          margin: 0,
          fontSize: "32px"
        }
      },
      "Azure Bank"
    ),

    React.createElement(
      "p",
      {
        style: {
          margin: "8px 0 0",
          opacity: 0.9
        }
      },
      "Secure digital banking built on Azure"
    )
  );
}

module.exports = Header;