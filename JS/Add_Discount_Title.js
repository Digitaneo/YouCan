<!-- إضافة نسبة التخفيض للعنوان -->
<script>
    var dis_price = document.querySelector('div.product-section.price-section > h3 > span.before.currency-value') !== null;
    if (dis_price) {
        const prodTitle = document.getElementsByClassName("single-title");
        const disBadge = document.createElement('span');
        disBadge.setAttribute("class", "discount_badge");
        disBadge.innerHTML =  'تخفيض!';
        prodTitle[0].appendChild(disBadge);
    }
</script>
