// JavaScript source code
var xhr = new XMLHttpRequest();
xhr.onload = function () {
    document.getElementById('content').innerHTML = xhr.responseText;
}
xhr.open('GET', 'file:///C:/Users/user/Desktop/gruppo%20mona/js/data.html', false);
xhr.send(null);