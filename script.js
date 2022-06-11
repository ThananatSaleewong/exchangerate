const currency_1 = document.getElementById('currency-one');
const currency_2 = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rateText = document.getElementById('rate');
const swap = document.getElementById('btn');

currency_1.addEventListener('change',calculateMoney);
currency_2.addEventListener('change',calculateMoney);
amount_one.addEventListener('input',calculateMoney)
amount_two.addEventListener('input',calculateMoney)

function calculateMoney() {
    const one = currency_1.value;
    const two = currency_2.value;
    fetch(`https://v6.exchangerate-api.com/v6/5b160610798124c8b66247cb/latest/${one}`)
    .then(res=>res.json()).then(data=>{
        const rate =data.conversion_rates[two];
        rateText.innerText=`1 ${one} = ${rate} ${two}`;
        amount_two.value=(amount_one.value*rate).toFixed(2);
    })
}
swap.addEventListener('click',()=>{
    const temp = currency_1.value;
    currency_1.value=currency_2.value;
    currency_2.value = temp;
    calculateMoney();
})

calculateMoney();