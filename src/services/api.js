const API_BASE_URL = process.env.API_BASE_URL || "";

async function depositMoney(transaction) {
  const response = await fetch(
    `${API_BASE_URL}/api/deposit`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(transaction)
    }
  );

  if (!response.ok) {
    throw new Error("Deposit request failed");
  }

  return response.json();
}

module.exports = {
  depositMoney
};