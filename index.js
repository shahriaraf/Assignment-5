


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