const React = require("react");
const { depositMoney } = require("../services/api");

function Deposit() {
  const [amount, setAmount] = React.useState("");

  async function handleDeposit() {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }

    const transaction = {
      transactionId: "TXN-" + Date.now(),
      accountNumber: "10001",
      transactionType: "DEPOSIT",
      amount: Number(amount),
      currency: "INR"
    };

    try {
      const result = await depositMoney(transaction);

      console.log("Deposit response:", result);

      alert("Deposit request submitted successfully.");
    } catch (error) {
      console.error("Deposit error:", error);

      alert("Deposit request failed.");
    }
  }

  return React.createElement(
    "div",
    { className: "card" },

    React.createElement(
      "div",
      { className: "icon" },
      "📥"
    ),

    React.createElement(
      "h3",
      null,
      "Deposit Money"
    ),

    React.createElement(
      "p",
      null,
      "Enter the amount you want to deposit."
    ),

    React.createElement(
      "input",
      {
        type: "number",
        placeholder: "Enter amount in INR",
        min: "1",
        value: amount,
        onChange: (event) => setAmount(event.target.value)
      }
    ),

    React.createElement(
      "button",
      {
        onClick: handleDeposit
      },
      "Deposit Money"
    )
  );
}

module.exports = Deposit;