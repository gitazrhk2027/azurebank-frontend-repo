
const React = require("react");

function Balance() {
  const checkBalance = async () => {
    try {
      const response = await fetch("/api/balance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          accountNumber: "10001"
        })
      });

      const data = await response.text();

      alert("Response: " + data);

    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
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
        type: "button",
        onClick: checkBalance
      },
      "Check Balance"
    )
  );
}

module.exports = Balance;

