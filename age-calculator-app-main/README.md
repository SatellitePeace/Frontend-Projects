# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted


### Links

- Solution URL: https://github.com/SatellitePeace/Frontend-Projects/tree/main/age-calculator-app-main
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

I learned a couple of things in this section but what i am must proud of is  how i was ables to shorten the arguements and contents in my if statements. And how i was able to create seperate functions for the error making the code much more cleaner

```js
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
```

## Author

- Frontend Mentor - [Nneoma Njoku](https://www.frontendmentor.io/profile/SatllitePeace)


