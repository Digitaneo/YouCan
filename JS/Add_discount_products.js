<!-- إضافة نسبة التخفيض للمنتجات مع تنسيق النص RTL -->
<script>
    var productItem = document.getElementsByClassName("product-item");

    for (var i = 0; i < productItem.length; i++) {
        var price_checker = productItem[i].querySelector("div.product-info > div > span.currency-value.before") !== null;
        if (price_checker) {
            productItem[i].style.position = "relative";
            
            // إضافة التنسيق RTL
            var discount_pp = document.createElement("span");
            discount_pp.setAttribute("class", "discount_pp");
            discount_pp.style.direction = "rtl"; // ⭐️ إضافة اتجاه RTL
            productItem[i].appendChild(discount_pp);

            var price_bef = productItem[i].querySelector("div.product-info > div > span.currency-value.before > span.value");
            var price_aft = productItem[i].querySelector("div.product-info > div > span.currency-value.after > span.value");

            var price_before = parseFloat(price_bef.textContent.replace(',', ''));
            var price_after = parseFloat(price_aft.textContent.replace(',', ''));

            if (!isNaN(price_before) && !isNaN(price_after) && price_before > 0) {
                var discount_percent = Math.round(100 - (price_after * 100 / price_before));
                discount_pp.innerHTML = "-" + discount_percent + "%";
            }
        }
    }
</script>
