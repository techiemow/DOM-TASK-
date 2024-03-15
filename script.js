document.querySelector('.currencyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const amount = document.querySelector('.amount').value;
    const from = document.querySelector('.fromCurrency').value;
    const to = document.querySelector('.toCurrency').value;

    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${amount}&from=${from}&to=${to}`)
        .then(resp => resp.json())
        .then((data) => {
            let result = amount + ' ' + from + ' = ' + data.rates[to] + ' ' + to; 

            document.querySelector('.conversion').innerHTML = result;
        })
        .catch(error => {
            console.error('Error:', error);
            alert("NO Currency Input Given")
        });
});