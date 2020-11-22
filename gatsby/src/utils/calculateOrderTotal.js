import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );
    console.log(pizza);
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
