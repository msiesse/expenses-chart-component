const data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]

const changeHeightOfStick = (stickIcon, amount, maxAmount) => {
    if (window.screen.availWidth <= 425)
        stickIcon.style.height = `${(amount / maxAmount) * 8}em`
    else
        stickIcon.style.height = `${(amount / maxAmount) * 7}em`
}

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const maxAmount = Math.max(...data.map((elem) => elem.amount))
weekdays.forEach((day, index) => {
    const stickIcon = document.getElementById(`stick-icon-${day}`)
    changeHeightOfStick(stickIcon, data[index].amount, maxAmount)

    const stickInfo = document.getElementById(`info-stick-${day}`)
    stickInfo.innerHTML = `$${data[index].amount}`
    stickIcon.addEventListener('focus', () => {
        stickInfo.style.backgroundColor = 'hsl(25, 47%, 15%)'
        stickInfo.style.zIndex = '1'
    })
    stickIcon.addEventListener('blur', () => {
        stickInfo.style.backgroundColor = 'white'
        stickInfo.style.zIndex = '0'
    })
    stickIcon.addEventListener('mouseover', () => {
        stickInfo.style.backgroundColor = 'hsl(25, 47%, 15%)'
        stickInfo.style.zIndex = '1'
    })
    stickIcon.addEventListener('mouseleave', () => {
        if (document.activeElement !== stickIcon) {
            stickInfo.style.backgroundColor = 'white'
            stickInfo.style.zIndex = '0'
        }
    })
    addEventListener('resize', () => {
        changeHeightOfStick(stickIcon, data[index].amount, maxAmount)
    })
})

