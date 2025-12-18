// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recommendation-form');
    const list = document.getElementById('recommendations-list');
    const showFormButton = document.getElementById('show-recommendation-form');

    // إظهار نموذج إضافة التوصية عند الضغط على الزر
    showFormButton.addEventListener('click', () => {
        form.style.display = 'block';
        showFormButton.style.display = 'none';
    });

    // المهمة 7 و 9: إضافة توصية جديدة والتأكيد المنبثق
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // منع الإرسال الافتراضي للصفحة

        const recommendationText = document.getElementById('new-recommendation-text').value;
        const recommendationName = document.getElementById('new-recommendation-name').value;

        // المهمة 9: الرسالة المنبثقة (Confirmation Dialogue)
        const isConfirmed = confirm(`هل أنت متأكد من رغبتك في إرسال التوصية باسم: ${recommendationName}؟`);

        if (isConfirmed) {
            // المهمة 7: إنشاء عنصر التوصية الجديد وإضافته للقائمة
            const newRec = document.createElement('p');
            newRec.classList.add('recommendation-text');
            newRec.innerHTML = `"${recommendationText}" - **${recommendationName}**`;
            list.appendChild(newRec);

            // مسح النموذج وإخفائه بعد الإرسال الناجح
            form.reset();
            form.style.display = 'none';
            showFormButton.style.display = 'block';

            alert('تم إضافة التوصية بنجاح!'); // إشعار إضافي
        } else {
            alert('تم إلغاء الإرسال.');
        }
    });
});
