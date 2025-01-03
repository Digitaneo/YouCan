<script>
    const newsList = document.getElementById('news-list');

    // نسخ العناصر داخل القائمة لضمان التكرار المستمر
    const cloneNewsItems = () => {
        const items = Array.from(newsList.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            newsList.appendChild(clone); // إضافة العناصر المنسوخة
        });
    };

    // ضبط مدة الحركة بناءً على عرض المحتوى
    const setTickerDuration = () => {
        const listWidth = newsList.offsetWidth; // عرض القائمة
        const containerWidth = newsList.parentElement.offsetWidth; // عرض الحاوية
        const duration = listWidth / 50; // سرعة الحركة (50px/ثانية)
        newsList.style.animationDuration = `${duration}s`; // تعيين مدة الحركة
    };

    // إعداد الحركة عند تحميل الصفحة
    window.onload = () => {
        cloneNewsItems(); // نسخ العناصر فور تحميل الصفحة
        setTickerDuration(); // ضبط مدة الحركة بناءً على العرض
    };

    // إعادة حساب مدة الحركة عند تغيير حجم النافذة
    window.onresize = () => {
        setTickerDuration(); // إعادة حساب المدة عند تغيير الحجم
    };
</script>
