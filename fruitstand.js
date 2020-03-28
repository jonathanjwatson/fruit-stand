function FruitStand(owner, name, startingBalance) {
  if (typeof owner !== "string" || typeof name !== "string") {
    throw new Error("Please enter valid information");
  }
  const formattedStartingBalance = parseFloat(startingBalance);
  if (isNaN(formattedStartingBalance)) {
    throw new Error("Please enter valid information");
  }
  this.owner = owner;
  this.name = name;
  this.balance = formattedStartingBalance;
}

module.exports = FruitStand;
