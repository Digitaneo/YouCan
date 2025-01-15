<script>
  function formatPrices() {
    const values = document.querySelectorAll('.value');
    values.forEach(element => {
      const number = parseInt(element.textContent.replace(/,/g, ''), 10);
      if (!isNaN(number)) {
        element.textContent = number.toLocaleString();
      }
    });
  }

  formatPrices();

  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {

      const priceElement = document.querySelector('.value');
      if (priceElement) {

        const selectedValue = radio.value;
        const newPrice = selectedValue == '100' ? 1000 : 1500;
        priceElement.textContent = newPrice;
        formatPrices();
      }
    });
  });
</script>
