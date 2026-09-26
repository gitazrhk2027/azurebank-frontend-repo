const LOGIC_APP_URL = process.env.LOGIC_APP_URL;

async function depositMoney(transaction) {
  const response = await fetch(LOGIC_APP_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(transaction)
  });

  if (!response.ok) {
    throw new Error("Deposit request failed");
  }

  return response.json();
}

module.exports = {
  depositMoney
};