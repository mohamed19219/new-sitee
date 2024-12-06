// إضافة أحداث التفاعل مع الحقول
document.getElementById('username').addEventListener('input', checkProgress);
document.getElementById('email').addEventListener('input', checkProgress);
document.getElementById('password').addEventListener('input', checkProgress);
document.getElementById('confirm-password').addEventListener('input', checkProgress);

function checkProgress() {
    let progressBar = document.getElementById('progress');
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    let progress = 0;
    if (username.length > 0) progress += 25;
    if (email.length > 0) progress += 25;
    if (password.length > 0) progress += 25;
    if (confirmPassword.length > 0) progress += 25;

    document.querySelector('.progress-bar').style.display = 'block';
    progressBar.style.width = progress + '%';
}

// التحقق من المدخلات عند إرسال النموذج
document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('error-message').classList.add('show');
    } else {
        document.getElementById('error-message').classList.remove('show');
        alert('Account created successfully!');
        // هنا يمكنك تنفيذ أي إجراء بعد إنشاء الحساب (مثل توجيه المستخدم إلى صفحة تسجيل الدخول)
    }
});
