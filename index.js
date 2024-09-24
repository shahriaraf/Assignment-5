

    
//  document.getElementById('date-time-zone').addEventListener('click', function() {
//     const date = new Date();
//     const options = {
//         timeZone: 'Asia/Dhaka',
//         year: 'numeric',
//         month: 'numeric',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//     };
//     const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    
//     // Save the formatted date to local storage
//     localStorage.setItem('formattedDate', formattedDate);
    
//     // Optionally, you could redirect to the second page
//     window.location.href = 'history.html';
// });

// window.onscroll = function() {
//     stickyNavbar();
// };



// Adding sticky navbar
const navbar = document.getElementById("navbar");
        const sticky = navbar.offsetTop;

        function stickyNavbar() {
            if (window.scrollY > sticky) {
                navbar.classList.add("sticky", "top-0", "fixed","shadow-2xl", "shadow-slate-500");
                navbar.classList.remove("bg-transparent");
            } else {
                navbar.classList.remove("sticky", "top-0", "fixed","shadow-2xl","shadow-slate-500");
                navbar.classList.add("bg-red-100");
            }
        }

        window.onscroll = stickyNavbar;




document.getElementById('date-time-zone').addEventListener('click',function donate(){

    const money = document.getElementById('input-1').value;
    const ballace = document.getElementById('account').innerText
    parseFloat('ballace')
})