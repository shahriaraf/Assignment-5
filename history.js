const formattedDate = localStorage.getItem('formattedDate');
        
        // If the formatted date exists, display it
        if (formattedDate) {
            document.getElementById('date-time-change').innerText = formattedDate;
        } else {
            document.getElementById('date-time-change').innerText = 'No date and time set.';
        }