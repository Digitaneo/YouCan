<script>
  const values = document.querySelectorAll('.value');

  values.forEach(element => {
    const number = parseInt(element.textContent, 10);
    if (!isNaN(number)) {
      element.textContent = number.toLocaleString();
    }
  });
</script>
