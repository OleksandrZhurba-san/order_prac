const form = document.querySelector("form");
function createButtons() {
  const orderPaidBtn = document.createElement("button");
  const orderSentBtn = document.createElement("button");
  const orderReceivedBtn = document.createElement("button");
  const btnContainer = document.querySelector(".btn-container");
  orderPaidBtn.textContent = "Order paid";
  orderSentBtn.textContent = "Order sent";
  orderReceivedBtn.textContent = "Order received";
  btnContainer.append(orderPaidBtn, orderSentBtn, orderReceivedBtn);
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  createButtons();
});
