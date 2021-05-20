const pages = document.querySelector('.pages');
const locale = window.navigator.language = 'nl';
const tearAnimation = document.getElementsByClassName("tear")[0];
let countClickCalendar = 0;

let date = new Date('3-1-2011');
let dateVandaag = new Date();
let dayNum = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(locale, { weekday: 'long'});
let monthName = date.toLocaleString(locale, { month: 'long'});
let year = date.getFullYear();

function daysInMonth (month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function getNewDate () {
  if (dayNum < daysInMonth(month, year)) {
    dayNum = dayNum + Math.floor(Math.random() * 9) + 1;
    if (countClickCalendar >= 6){
      dayNum = dateVandaag.getDate();
      month = dateVandaag.getMonth();
      year = dateVandaag.getFullYear();
    }
  } else {
    dayNum = 1;
  }
  if(dayNum > 25){
    dayNum = 1;
    month++;
  }
  if (dayNum === 1 && month < 11) {
    month++;
  } else if (dayNum === 1 && month === 11) {
    month = 0;
  }
  if (dayNum === 1 && month === 0) {
    year++;
  }
  if (dayNum === 14 && month === 3 && year === 2009){
    console.log("hallo");
  }
  const newDate = new Date(year, month, dayNum);
  dayName = newDate.toLocaleString('nl', { weekday: 'long' });
  monthName = newDate.toLocaleString('nl', { month: 'long' });
}

function handleClick (e) {
  getNewDate();
  updateCalendar(e.target);
  checkDate();
  console.log(e);
  console.log('Er is geklikt');
}

function checkDate () {
}

function updateCalendar(target) {
  if (target && target.classList.contains('page')) {
    target.classList.add('tear');
    setTimeout(() => {
      pages.removeChild(target);
    }, 800);
  } else {
    return;
  }
  renderPage();
}

function renderPage () {
  const newPage = document.createElement('div');
  newPage.classList.add('page');
  newPage.innerHTML = `
    <p class="kalenderP month">${monthName}</p>
    <p class="kalenderP day">${dayNum}</p>
    <p class="kalenderP day-name">${dayName}</p>
    <p class="kalenderP year">${year}</p>
  `;
  pages.appendChild(newPage);
}

renderPage();

pages.addEventListener('click', function(event) {
  handleClick(event);
  countClickCalendar += 1;
  if (countClickCalendar > 6 ){
    setTimeout(() => {  location.href = "einde.html"; }, 5000);
    pages.style.pointerEvents = "none";
  }
});
