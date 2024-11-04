const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

checkOrderName = (orderName) => {
  if (
    orderName == vegetarian ||
    orderName == hawaiian ||
    orderName == pepperoni
  ) {
    return true;
  } else {
    return false;
  }
};

cookingTime = (quantity) => {
  if (quantity < 3) {
    return "10 minutes.";
  } else if (quantity < 6) {
    return "15 minutes.";
  } else {
    return "20 minutes.";
  }
};

// amount = 0;  used for debugging
// pizzatype = ""; used for debugging

pizzaOrder = () => {
  amount = document.getElementById("amount").value;
  pizzaType = document.getElementById("pizza").value;
  order = checkOrderName(pizzaType);
  if (order) {
    time = cookingTime(amount);
    price = pizzaPrice * amount;
    confirmationString = `Great, I'll get started on your ${pizzaType} right away, it will cost ${price} kr. The order will take ${time}`;
    document.getElementById("orderConfirmation").innerHTML = confirmationString;
  } else {
    document.getElementById("orderConfirmation").innerHTML =
      "That pizza is not on the menu";
  }
};
