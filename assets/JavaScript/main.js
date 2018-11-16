$(document).ready(function () {
    for (var i = 1; i < 10; i++) {
        $('<input type="radio" name="' + i + '" />').prependTo('ul[class=question' + i + '] li');
    }
});