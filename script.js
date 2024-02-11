function countdown(num, callback) {
    setTimeout(function() {
        const countdownElement = document.getElementById('countdown');
        countdownElement.innerText = num;
        if (num > 1) {
            countdown(num - 1, callback);
        } else {
            callback();
        }
    }, 1000);
}

countdown(10, function() {
    setTimeout(function() {
        const countdownElement = document.getElementById('countdown');
        countdownElement.innerText = "Happy Independence Day";
    }, 1000);
});
