const React = require("react");

function Transfer() {
  return React.createElement(
    "div",
    { className: "card" },

    React.createElement(
      "div",
      { className: "icon" },
      "🔄"
    ),

    React.createElement(
      "h3",
      null,
      "Transfer Money"
    ),

    React.createElement(
      "p",
      null,
      "Transfer funds between bank accounts."
    ),

    React.createElement(
      "button",
      null,
      "Transfer"
    )
  );
}

module.exports = Transfer;