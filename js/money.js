const income = document.getElementById('income')
const food = document.getElementById('food-cost')
const rent = document.getElementById('rent-cost')
const clothes = document.getElementById('clothes-cost')

function updateBalance() {

    const totalCost = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value)
    document.getElementById('expences').innerText = totalCost
    const balanceRemain = parseInt(income.value) - totalCost
    document.getElementById('balance-remain').innerText = balanceRemain
}
const calculate = document.getElementById('calculate').addEventListener('click', function () {
    // validation 
    if (
        isNaN(parseInt(income.value)) ||
        isNaN(parseInt(food.value)) ||
        isNaN(parseInt(rent.value)) ||
        isNaN(parseInt(clothes.value)) ||
        parseInt(income.value) < 0 ||
        parseInt(food.value) < 0 ||
        parseInt(rent.value) < 0 ||
        parseInt(clothes.value) < 0
    ) {
        return alert("Please input a valid number");
    }
    updateBalance()

})
const saveMoney = document.getElementById('save-button').addEventListener('click', function () {
    const income = getInputValue('income')
    const saveInput = getInputValue('save-field')
    if (saveInput < 0 || isNaN(saveInput)) {
        return alert("Please input a valid number")
    } else {
        const savingAmount = (parseInt(saveInput) / 100) * parseInt(income)
        document.getElementById('saving').innerText = savingAmount
        const LastBalanceText = document.getElementById('balance-remain').innerText
        const lastBalance = parseInt(LastBalanceText)
        if (savingAmount > lastBalance) {
            return alert("You can't save more then your remaining balance ")
        }
        const totalRemain = lastBalance - savingAmount
        document.getElementById('total-remain').innerText = totalRemain
    }
})

function getInputValue(id) {
    const inputValue = document.getElementById(id)
    return parseInt(inputValue.value)
}
