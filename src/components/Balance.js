const React = require("react");
const { getBalance } = require("../api");

function Balance() {
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
        id: "balanceButton"
      },
      "Check Balance"
    ),

    React.createElement(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: `
            document.getElementById("balanceButton").addEventListener("click", async function () {

              try {

                const data = await getBalance("10001");

                if (!data || data.length === 0) {
                  alert("No account information found.");
                  return;
                }

                const account = data[0];

                alert(
                  "Account: " +
                  account.AccountNumber +
                  "\\nBalance: ₹" +
                  Number(account.Balance).toFixed(2) +
                  "\\nCurrency: " +
                  account.Currency
                );

              } catch (error) {

                console.error("Balance error:", error);

                alert(
                  "Balance request failed.\\n" +
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

module.exports = Balance;