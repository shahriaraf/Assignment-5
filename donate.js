

let totalDonations1 = 0;

document.getElementById('openModal-1').addEventListener('click', function() {
    const amountInput = document.getElementById('input-1');
    const amount = parseFloat(amountInput.value);
    const accountMoney = document.getElementById('account').innerText;
    let remaingMoney = parseFloat(accountMoney);

    if (amount > 0) {
        totalDonations1 += amount;
        remaingMoney = remaingMoney - amount;

        // console.log(totalDonations)
         // Update total donations
        document.getElementById('totalAmount1').innerText = totalDonations1; // Update display
        document.getElementById('noakhali-donate').innerText = totalDonations1; // Update display
        document.getElementById('account').innerText = remaingMoney; // Update display


        // Update the date and time
        const now = new Date();
        document.getElementById('dateTime1').textContent = now.toString(); // Update display

        amountInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a valid amount.");
    }
});




let totalDonations2 = 0;

document.getElementById('openModal-2').addEventListener('click', function() {
    const amountInput = document.getElementById('input-2');
    const amount = parseFloat(amountInput.value);
    const accountMoney = document.getElementById('account').innerText;
    let remaingMoney = parseFloat(accountMoney);

    if (amount > 0) {
        totalDonations2 += amount;
        remaingMoney = remaingMoney - amount;

        // console.log(totalDonations)
         // Update total donations
        document.getElementById('totalAmount2').innerText = totalDonations2; // Update display
        document.getElementById('feni-donate').innerText = totalDonations2; // Update display
        document.getElementById('account').innerText = remaingMoney; // Update display


        // Update the date and time
        const now = new Date();
        document.getElementById('dateTime2').textContent = now.toString(); // Update display

        amountInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a valid amount.");
    }
});




let totalDonations3 = 0;

document.getElementById('openModal-3').addEventListener('click', function() {
    const amountInput = document.getElementById('input-3');
    const amount = parseFloat(amountInput.value);
    const accountMoney = document.getElementById('account').innerText;
    let remaingMoney = parseFloat(accountMoney);

    if (amount > 0) {
        totalDonations3 += amount;
        remaingMoney = remaingMoney - amount;

        // console.log(totalDonations)
         // Update total donations
        document.getElementById('totalAmount3').innerText = totalDonations3; // Update display
        document.getElementById('protest-donate').innerText = totalDonations3; // Update display
        document.getElementById('account').innerText = remaingMoney; // Update display


        // Update the date and time
        const now = new Date();
        document.getElementById('dateTime3').textContent = now.toString(); // Update display

        amountInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a valid amount.");
    }
});
