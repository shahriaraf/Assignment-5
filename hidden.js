document.getElementById('btn-history').addEventListener('click', function(){


    document.getElementById('history').classList.remove('hidden')
    document.getElementById('btn-history').classList.add('bg-red-400')
    document.getElementById('donate').classList.add('hidden')
    document.getElementById('btn-donate').classList.remove('bg-red-400')
})


document.getElementById('btn-donate').addEventListener('click', function(){


    document.getElementById('donate').classList.remove('hidden')
    document.getElementById('btn-donate').classList.add('bg-red-400')
    document.getElementById('history').classList.add('hidden')
    document.getElementById('btn-history').classList.remove('bg-red-400')

})