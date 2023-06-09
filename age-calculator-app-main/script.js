const ageForm = document.getElementById('ageForm');
const resultDiv = document.getElementById('result');
const years = document.getElementById('years');
const months = document.getElementById('months');
const days = document.getElementById('days');
const error = document.querySelectorAll(".error")
const input = document.querySelectorAll("input")
const label = document.querySelectorAll("label")

// Event Listener
ageForm.addEventListener('submit', calculateAge);

// Event listener function
function calculateAge(e) {
    e.preventDefault();
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Validate the date
    const isValidDate = isValid(day, month, year);

    if (!isValidDate) {
        showError()
        return;
    }else{
     clearError()
    }

    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentDay = currentDate.getDate();

    // Calculate the age
    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    // Adjust the age if necessary
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        const daysInPreviousMonth = getDaysInMonth(currentMonth - 1, currentYear);
        ageMonths--;
        ageDays += daysInPreviousMonth;
    }

    // Display the age
    // years.textContent = ageYears
    // months.textContent = ageMonths
    // days.textContent = ageDays

    // Animate the numbers (Bonus)
    animateNumbers(ageYears, years);
    animateNumbers(ageMonths, months);
    animateNumbers(ageDays, days);
}

function isValid(day, month, year) {
    const daysInMonth = getDaysInMonth(month, year);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }

    if (day < 1 || day > 31) {
        return false;
    }
    if (month < 1 || month > 12) {
        return false;
    }

    if (year > new Date().getFullYear()) {
        return false;
    }

    if (day > daysInMonth) {
        return false;
    }

    return true;
}

// Modify age function
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Show Error
function showError() {
    error.forEach((err) => {
        err.style.display = "block"
    })
    input.forEach((inputErr) => {
        inputErr.classList.add("input-error")
    })
    label.forEach((labelErr) => {
        labelErr.classList.add("label-error")
    })
}

// Clear Error
function clearError() {
    error.forEach((err) => {
        err.style.display = "none"
    })
    input.forEach((inputErr) => {
        inputErr.classList.remove("input-error")
    })
    label.forEach((labelErr) => {
        labelErr.classList.remove("label-error")
    })
}

// Animate age display with timer
function animateNumbers(target, element) {
    const initialValue = 0;
    const step = Math.ceil(target / 50);
    let current = initialValue;

    const intervalId = setInterval(() => {
        if (current >= target) {
            element.textContent = target;
            clearInterval(intervalId);
        } else {
            current += step;
            element.textContent = current;
        }
    }, 20);
}
