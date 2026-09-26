async function depositMoney(transaction) {
  const response = await fetch("/api/deposit", {
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