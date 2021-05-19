var create_dyn_card = function (jsonData) {
  
  console.log(jsonData);

  let pizzas = jsonData.pizzas;

  for (pizza of pizzas) {
    let menu_card = $("<div>").addClass("menu_card");
    let menu_image = $("<img>").attr('src', 'img/'+pizza.img_url);
    let menu_h3 = $("<h3>").text(pizza.desc);
    let menu_span = $("<span>").text(pizza.category);
    let menu_categories = $("<div>").addClass("menu_categories");
    let menu_details = $("<div>").addClass("menu_details");
    let menu_price = $("<span>").addClass("menu_price").text("€" + pizza.price.toFixed(2));
    let menu_add = $("<button>").addClass("menu_add").text("+")
      .attr('onclick', 'alert("Card dinamica funzionante")');

    menu_card
      .append(menu_image)
      .append(menu_h3)
      .append(menu_categories
        .append(menu_span))
      .append(menu_details
        .append(menu_price)
        .append(menu_add));

    $(".flexcontainer").append(menu_card);
  }
}

let onFail = function(error) {
  console.log("errore nella lettura del file json");
  console.log(error);
}

let init = function() {
  $.getJSON("data")
  .done(create_dyn_card)
  .fail(onFail);
}

$(document).ready(init);