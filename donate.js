

// Reuseable Function 1
// This is a reuseable function

function handleDonation(inputId, accountId, eventID, transId, placeID) {
    const amountInput = document.getElementById(inputId);
    const amount = parseFloat(amountInput.value);
    console.log(amount)
    const accountMoney = document.getElementById(accountId).innerText;
    const place = document.getElementById(placeID).innerText;
    let remainingMoney = parseFloat(accountMoney);
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModal');

    let totalDonations = parseFloat(document.getElementById(eventID).innerText);

    if (amount > 0) {

        modal.classList.remove('hidden');

        totalDonations += amount;
        remainingMoney -= amount;

        // Update total donations and account balance

        document.getElementById(eventID).innerText = totalDonations;
        document.getElementById(accountId).innerText = remainingMoney;


        const div = document.createElement("div");

        // Set class and id for the div
        div.className = "border-solid border-red-300 rounded-xl p-3 mb-4";
        div.id = "myUniqueId";

        // Step 2: Create a <p>
        const pAmount = document.createElement("p");
        pAmount.innerText = `${amount} Taka was ${place}`;
        pAmount.className = "font-semibold text-lg"

        // Step 3: Create another <p>
        const pDateTime = document.createElement("p");
        const now = new Date();
        const dateTime = now.toString();
        pDateTime.innerText = `Date: ${dateTime}`;

        // Step 4: Append the <p> to <div>
        div.appendChild(pAmount);
        div.appendChild(pDateTime);

        // Step 5: Append the <div>
        document.getElementById(transId).appendChild(div);


        amountInput.value = ''; // Input field clear

    } else {
        alert("Please enter a valid amount.");
    }

    closeModalButton.addEventListener('click', function () {
        modal.classList.add('hidden');
    });


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


