function calculateTotal() {
    let productSelect = document.getElementById("productSelect");
    let selectedProduct =
      productSelect.options[productSelect.selectedIndex].value;

    let quantity = parseFloat(document.getElementById("quantity").value);

    let price = 0;
    switch (selectedProduct) {
      case "product1":
        price = 50;
        break;
      case "product2":
        price = 20;
        break;
      case "product3":
        price = 10;
        break;
      default:
        price = 0;
    }
    let totalCost = 0;
    if (quantity>0){
        let totalCost = price * quantity;
        document.getElementById("totalCost").textContent = totalCost;
    }
    else{
    document.getElementById("totalCost").textContent = totalCost;}
  }