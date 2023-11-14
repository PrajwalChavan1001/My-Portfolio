$('.portfolio button').mousedown(function () {
    timeout = setInterval(function () {
        window.scrollBy(0, -1); // To scroll up
    }, 0); // You can adjust the scroll speed by changing this value
    return false;
});
 