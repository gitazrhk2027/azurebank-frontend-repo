
const React = require("react");

function Balance() {
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const checkBalance = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        process.env.BALANCE_LOGIC_APP_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            accountNumber: "10001"
          })
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
      { onClick: checkBalance },
      loading ? "Checking..." : "Check Balance"
    ),

    result &&
      React.createElement(
        "p",
        null,
        `Balance: ${result[0]?.Balance} ${result[0]?.Currency}`
      ),

    error &&
      React.createElement(
        "p",
        null,
        `Error: ${error}`
      )
  );
}

module.exports = Balance;

