
// Add hidden class for both section 

document.getElementById('btn-history').addEventListener('click', function(){

    // show history section
    document.getElementById('history').classList.remove('hidden')
    document.getElementById('donate').classList.add('hidden')

    // history button colour change
    document.getElementById('btn-history').classList.add('bg-red-400')
    document.getElementById('btn-donate').classList.remove('bg-red-400')
})





document.getElementById('btn-donate').addEventListener('click', function(){

    // show donate section
    document.getElementById('donate').classList.remove('hidden')
    document.getElementById('history').classList.add('hidden')

    // donate button colour change
    document.getElementById('btn-donate').classList.add('bg-red-400')
    document.getElementById('btn-history').classList.remove('bg-red-400')

})