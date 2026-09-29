
const React = require("react");

function Balance() {
  const handleClick = () => {
    alert("Balance button clicked");
  };

  return React.createElement(
    "div",
    { className: "card" },

    React.createElement(
      "div",
      { className: "icon" },
      "💰"
    ),

    React.createElement(
      "h3",
      null,
      "Balance Enquiry"
    ),

    React.createElement(
      "p",
      null,
      "Check your current account balance."
    ),

    React.createElement(
      "button",
      {
        onClick: handleClick
      },
      "Check Balance"
    )
  );
}

module.exports = Balance;

