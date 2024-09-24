

// Reuseable Function 1

function handleDonation(inputId, accountId, eventID, transId, placeID) {
    const amountInput = document.getElementById(inputId);
    const amount = parseFloat(amountInput.value);
    const accountMoney = document.getElementById(accountId).innerText;
    const place = document.getElementById(placeID).innerText;
    let remainingMoney = parseFloat(accountMoney);
    

    let totalDonations = parseFloat(document.getElementById(eventID).innerText);

    if (amount > 0) {
        totalDonations += amount;
        remainingMoney -= amount;

        // Update total donations and account balance
       
        document.getElementById(eventID).innerText = totalDonations; // Update total donations display
        document.getElementById(accountId).innerText = remainingMoney; // Update account display

           
        const p = document.createElement('p');
        const br = document.createElement('br')
        p.innerText = `${totalDonations} taka has been ${place}`;br;
        
        document.getElementById(transId).appendChild(p);
                    

        // Update the date and time
        
        amountInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a valid amount.");
    }

    



    document.getElementById('"transactionHistory').appendChild(p);

    
}

document.getElementById('openModal-1').addEventListener('click', function() {
    handleDonation('input-1', 'account','noakhali-donate','transactionHistory1','flood-noakhali');
});

document.getElementById('openModal-2').addEventListener('click', function() {
    handleDonation('input-2', 'account','feni-donate','transactionHistory2','flood-relief');
});

document.getElementById('openModal-3').addEventListener('click', function() {
    handleDonation('input-3', 'account','protest-donate','transactionHistory3','quota');
});


