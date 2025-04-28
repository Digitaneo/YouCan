<!-- إضافة نسبة التخفيض للمنتجات -->
<script>
    var productItem = document.getElementsByClassName("product-item");
    
    for (var i = 0; i < productItem.length; i++) {
        var price_checker = productItem[i].querySelector("div.product-info > div > span.currency-value.before") !== null;
        if (price_checker) {
            productItem[i].style.position = "relative";
            var discount_pp = document.createElement("span");
            discount_pp.setAttribute("class", "discount_pp");
            discount_pp.style.direction = "ltr";
            productItem[i].appendChild(discount_pp);
            var price_bef = productItem[i].querySelector("div.product-info > div > span.currency-value.before > span.value");
            var price_aft = productItem[i].querySelector("div.product-info > div > span.currency-value.after > span.value");
            var price_after = parseInt(price_aft.textContent);
            var price_before = parseInt(price_bef.textContent);
    
            var pp = (price_after * 100) / price_before;
            var pp_rounded = (Math.round((100 - pp))).toString();
    
            discount_pp.innerHTML = -pp_rounded + "%";
        }
    }
</script>
