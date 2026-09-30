async function depositMoney(transaction) {
  const response = await fetch("/api/deposit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transaction)
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(
      "Deposit request failed: HTTP " + response.status
    );
  }

  return responseText;
}


async function getBalance(accountNumber) {
  const response = await fetch("/api/balance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      accountNumber: accountNumber
    })
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(
      "Balance request failed: HTTP " + response.status
    );
  }

  return JSON.parse(responseText);
}


module.exports = {
  depositMoney,
  getBalance
};