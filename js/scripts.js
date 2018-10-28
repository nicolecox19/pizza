//buisness logic
function Pizza(quantity, pizzaSize) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.veggieTopping = [];
  this.meatTopping = [];
};

Pizza.prototype.calculatePrice = function() {
  var totalPrice = 2 + (this.veggieTopping.length * 1)

  if (this.pizzaSize === "small") {
    return totalPrice * this.quantity;
  } else if (this.pizzaSize == "medium") {
    return (this.pizzaSize + 2) * this.quantity;
  } else if (this.pizzaSize === "large") {
    return (totalPrice + 4) * this.quantity;
  } else if (this.pizzaSize == "x-large") {
    return (totalPrice + 8) * this.quantity;
  }
};



//user interface
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    var quantity = $("input#quantity").val();
    var pizzaSize = $("select#size").val();

    var newPizza = new Pizza(quantity, pizzaSize);

    // debugger;

    var veggieTopping = $("input.veg:checkbox:checked").each(function() {
      newPizza.veggieTopping.push(veggieTopping);
    });


    var meatTopping = $("input.meat:checkbox:checked").each(function() {
      newPizza.meatTopping.push(meatTopping);
    });


    var pizzaPrice = newPizza.calculatePrice();



    $("#price").text(pizzaPrice);

    $("#result").show();
    event.preventDefault();
  });
});
