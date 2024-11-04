const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

orderName = prompt("Enter the name of the pizza you want to order today.");

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

testOrderName = checkOrderName(orderName);

while (testOrderName == false) {
  orderName = prompt(
    `Please enter a pizza thats on the menu. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
  );
  testOrderName = checkOrderName(orderName);
}

orderQuantity = prompt(`How many of ${orderName} do you want?`);

pizza = "";

if (orderQuantity == 1) {
  pizza = "pizza";
} else {
  pizza = "pizzas";
}

totalCost = (quantity) => {
  return quantity * pizzaPrice;
};

orderTotal = totalCost(orderQuantity);

cookingTime = (quantity) => {
  if (quantity < 3) {
    return "10 minutes.";
  } else if (quantity < 6) {
    return "15 minutes.";
  } else {
    return "20 minutes.";
  }
};

cookTime = cookingTime(orderQuantity);

alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The ${pizza} will take ${cookTime}`
);
