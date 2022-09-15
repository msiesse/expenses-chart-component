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

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const maxAmount = Math.max(...data.map((elem) => elem.amount))
weekdays.forEach((day, index) => {
    const elem = document.getElementById(`stick-icon-${day}`)
    elem.style.height = `${(data[index].amount / maxAmount) * 7}em`
    elem.addEventListener("click", () => {

    })
})

