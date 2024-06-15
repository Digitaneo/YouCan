<!-- إضافة النجوم للمنتجات -->
<script>
    var path = window.location.pathname;
    var containers = document.getElementsByClassName('product-title');
    for (var i = 0; i < containers.length; i++) {
        var e = containers[i];
        // التحقق من الصفحات
        if (!path.includes('/checkout/shipping') && !path.includes('/checkout/payment') && !path.includes('/checkout/information')) {
            var t = document.createElement('div');
            t.className = 'stars';
            for (var n = 0; n < 5; n++) {
                var a = document.createElement('span');
                a.className = 'fa fa-star checked';
                t.appendChild(a);
            }
            e.appendChild(t);
        }
    }
</script>
