function updateClock () {
    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("min");
    const secondElement = document.getElementById("second");

    const now = new Date();
    const hour = now.getHours() % 12;
    const min = now.getMinutes();
    const second = now.getSeconds();
    
    const hourDeg = (hour + min / 60) * 30;
    const minuteDeg = (min + second / 60) * 6;
    const secondDeg = second * 6;

    hourElement.style.transform = 'rotate(${hourDeg}deg)';
    minuteElement.style.transform = 'rotate(${minuteDeg}deg)';
    secondElement.style.transform = 'rotate(${secondDeg}deg)';

    setInterval(updateClock, 1000);


    updateClock ();
}