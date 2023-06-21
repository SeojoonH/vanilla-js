const dday = document.querySelector("h2#d-day");

function gapDay() {
  const eveDay = new Date("2023-12-25");
  const today = new Date();

  const gap = eveDay - today;

  const gapDate = String(Math.floor(gap / (1000 * 60 * 60 * 24)));
  const gapHour = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const gapmin = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(2, "0");
  const gapsec = String(Math.floor((gap / 1000) % 60)).padStart(2, "0");

  dday.innerText = `${gapDate}d ${gapHour}h ${gapmin}m ${gapsec}s`;
}

gapDay();
setInterval(gapDay, 1000);
