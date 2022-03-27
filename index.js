

const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");


setInterval(function () {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    hourHand.style.transform = "rotate(" + (30*hour + minute/2) + "deg)";
    minuteHand.style.transform = "rotate(" + 6 * minute + "deg)";
    secondHand.style.transform = "rotate(" + 6 * second + "deg)";
}, 1000)