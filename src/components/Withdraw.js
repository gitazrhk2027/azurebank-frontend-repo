const React = require("react");

function Withdraw() {
  return React.createElement(
    "div",
    { className: "card" },

    React.createElement(
      "div",
      { className: "icon" },
      "📤"
    ),

    React.createElement(
      "h3",
      null,
      "Withdraw Money"
    ),

    React.createElement(
      "p",
      null,
      "Withdraw money from your available balance."
    ),

    React.createElement(
      "button",
      null,
      "Withdraw"
    )
  );
}

module.exports = Withdraw;