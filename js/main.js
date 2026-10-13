const dialog = document.getElementById('order-dialog');
const closeButton = document.getElementById('close-order-dialog');
const form = document.getElementById('order-form');
const message = document.getElementById('form-message');
const modelSelect = document.getElementById('order-model');
const orderButtons = document.querySelectorAll('[data-order-model]');

if (dialog) {
  orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (modelSelect && button.dataset.orderModel) {
        modelSelect.value = button.dataset.orderModel;
      }
      dialog.showModal();
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => dialog.close());
  }
}

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      message.hidden = false;
      form.reset();
    }
  });
}
