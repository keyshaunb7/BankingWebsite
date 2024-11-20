document.getElementById('calculate').addEventListener('click', () => {
    const loan = parseFloat(document.getElementById('loan').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const years = parseInt(document.getElementById('years').value);
    const payments = years * 12;

    if (loan && rate && years) {
        const monthlyPayment = (loan * rate) / (1 - Math.pow(1 + rate, -payments));
        document.getElementById('result').innerHTML = `
            <h2>Monthly Payment: £${monthlyPayment.toFixed(2)}</h2>
        `;
    } else {
        document.getElementById('result').innerHTML = `<p>Please fill in all fields correctly.</p>`;
    }
});
