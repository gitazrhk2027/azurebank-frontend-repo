
const React = require("react");

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

                const response = await fetch("/api/balance", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    accountNumber: "10001"
                  })
                });

                const responseText = await response.text();

                if (!response.ok) {
                  throw new Error(
                    "Balance request failed: HTTP " + response.status
                  );
                }

                alert("Balance Response: " + responseText);

              } catch (error) {

                console.error("Balance error:", error);
                alert("Balance request failed: " + error.message);

              }

            });
          `
        }
      }
    )
  );
}

module.exports = Balance;

