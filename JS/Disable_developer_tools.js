<!-- تعطيل أدوات المطور -->
<script>
    document.onkeydown = function(n) {
        if (123 == n.keyCode) return !1;
    };
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
</script>


  <script>
    const values = document.querySelectorAll('.value');

    values.forEach(element => {
      const number = parseInt(element.textContent, 10);
      if (!isNaN(number)) {
        element.textContent = number.toLocaleString();
      }
    });
  </script>

<!-- جميع الحقوق محفوضة وأي استعمال أو سرقة للمحتوى دون طلب من
www.digitaneo.com
يعتبر خرق للقوانين يمكن المسائلة عنه -->