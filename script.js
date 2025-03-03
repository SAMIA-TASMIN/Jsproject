const time = document.getElementById('time');
const timeFormat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    const date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    // Format time to be two digits
    hr = hr < 10 ? '0' + hr : hr;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;

    // Display the time
    time.textContent = `${hr}:${mins}:${secs}`;

    console.log("hours: " + hr + ", mins: " + mins + ", secs: " + secs);
};
