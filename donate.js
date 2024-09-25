

// Reuseable Function 1
// This is a reuseable function

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


        const div = document.createElement("div");

        // Set class and id for the div
        div.className = "border-solid border-red-300 rounded-xl p-3 mb-4";
        div.id = "myUniqueId";

        // Step 2: Create a <p> element for amount
        const pAmount = document.createElement("p");
        pAmount.innerText = `${amount} Taka was ${place}`;
        pAmount.className = "font-semibold text-lg"

        // Step 3: Create another <p> element for date and time
        const pDateTime = document.createElement("p");
        const now = new Date();
        const dateTime = now.toString();
        pDateTime.innerText = `Date: ${dateTime}`;

        // Step 4: Append the <p> elements to the <div>
        div.appendChild(pAmount);
        div.appendChild(pDateTime);

        // Step 5: Append the <div> to the specified container
        document.getElementById(transId).appendChild(div);


        amountInput.value = ''; // Clear the input field

    } else {
        alert("Please enter a valid amount.");
    }


}

document.getElementById('openModal-1').addEventListener('click', function () {
    handleDonation('input-1', 'account', 'noakhali-donate', 'transactionHistory1', 'flood-noakhali');
});

document.getElementById('openModal-2').addEventListener('click', function () {
    handleDonation('input-2', 'account', 'feni-donate', 'transactionHistory2', 'flood-relief');
});

document.getElementById('openModal-3').addEventListener('click', function () {
    handleDonation('input-3', 'account', 'protest-donate', 'transactionHistory3', 'quota');
});


