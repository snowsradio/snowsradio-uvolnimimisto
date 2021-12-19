// Countdown 
const elem = document.getElementById('counter')
const christmas = 25
const date = new Date()
const daysLeft = 25 - date.getDate()
elem.innerText = daysLeft

// Wish quotes
const quotes = [
    "Wishing you a Merry Christmas filled with good times",
    "Merry Christmas, ya filthy animal!",
    "Merry Christmas! Don’t worry, this card has been SANTA-tized!",
    "May God shower His blessings on you this holiday season. Marry Christmas",
    "Merry Christmas! Wishing you all the happiness in the world."
]
const pick = quotes[Math.floor(Math.random() * quotes.length)]
const wish = document.getElementById('wish')
wish.innerText = pick
