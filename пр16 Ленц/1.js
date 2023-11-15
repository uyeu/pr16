function changeColor(color) {
    document.body.style.backgroundColor = color;
}


document.addEventListener('DOMContentLoaded', function () {
    generateCaptcha();
});

function generateCaptcha() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);

    window.captchaResult = num1 + num2;

    document.getElementById('captcha-question').innerText = 'Решите капчу: ' + num1 + ' + ' + num2;
}

function submitForm(event) {
    event.preventDefault();

    var userAnswer = parseInt(document.getElementById('captcha').value);

    if (userAnswer === window.captchaResult) {
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;

        var successMessage = 'Уважаемый(ая) ' + name + ', ваши контактные данные тел ' + phone + ' и email ' + email + ' приняты!';
        
        document.getElementById('feedback-form').reset();

        window.alert(successMessage);
    } else {
        window.alert('Ошибка! Проверка не пройдена.');
    }

}

function toggleNightMode() {
    var body = document.body;
    var feedbackCard = document.querySelector('.feedback-card');

    if (document.getElementById('nightMode').checked) {
        body.style.backgroundColor = '#1a1a1a'; 
        feedbackCard.style.backgroundColor = '#333'; 
    } else {
        body.style.backgroundColor = '#ffffff'; 
        feedbackCard.style.backgroundColor = '#f9f9f9'; 
    }
}
