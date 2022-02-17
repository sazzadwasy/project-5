function updateBalance() {
    const income = document.getElementById('income').value
    const food = document.getElementById('food-cost').value
    const rent = document.getElementById('rent-cost').value
    const clothes = document.getElementById('clothes-cost').value
    const totalCost = parseFloat(food) + parseFloat(rent) + parseFloat(clothes)
    document.getElementById('expences').innerText = totalCost
    const balanceRemain = parseFloat(income) - totalCost
    document.getElementById('balance-remain').innerText = balanceRemain
}

const calculate = document.getElementById('calculate').addEventListener('click', function () {
    updateBalance()

})
const saveMoney = document.getElementById('save-button').addEventListener('click', function () {
    const income = document.getElementById('income').value
    const saveInput = document.getElementById('save-field').value
    const savingAmount = (parseFloat(saveInput) / 100) * parseFloat(income)
    document.getElementById('saving').innerText = savingAmount
    const LastBalanceText = document.getElementById('balance-remain').innerText
    const lastBalance = parseFloat(LastBalanceText)
    const totalRemain = lastBalance - savingAmount
    document.getElementById('total-remain').innerText = totalRemain

})
