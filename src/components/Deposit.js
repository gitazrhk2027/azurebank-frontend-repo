const React = require("react");
const { depositMoney } = require("../api");

function Deposit() {
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
        id: "depositAmount",
        type: "number",
        placeholder: "Enter amount in INR",
        min: "1"
      }
    ),

    React.createElement(
      "button",
      {
        type: "button",
        id: "depositButton"
      },
      "Deposit Money"
    ),

    React.createElement(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: `
            document.getElementById("depositButton").addEventListener("click", async function (event) {

              event.preventDefault();

              const amount = document.getElementById("depositAmount").value;

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

                const responseText = await depositMoney(transaction);

                console.log("Deposit response:", responseText);

                alert("Deposit request submitted successfully.");

              } catch (error) {

                console.error("Deposit error:", error);

                alert(
                  "Deposit request failed.\\n" +
                  error.message
                );

              }

            });
          `
        }
      }
    )
  );
}

module.exports = Deposit;