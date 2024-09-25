
// Reuseable function 2
// This is a reuseable function


function toggleSection(buttonId, sectionToShowId, sectionToHideId) {
    // Show section
    document.getElementById(sectionToShowId).classList.remove('hidden');
    document.getElementById(sectionToHideId).classList.add('hidden');

    // Change button colors
    document.getElementById(buttonId).classList.add('bg-red-400');
    
    
    const otherButtonId = buttonId === 'btn-history' ? 'btn-donate' : 'btn-history';
    document.getElementById(otherButtonId).classList.remove('bg-red-400');
}

// Adding event listeners
document.getElementById('btn-history').addEventListener('click', function() {
    toggleSection('btn-history', 'history', 'donate');
});

document.getElementById('btn-donate').addEventListener('click', function() {
    toggleSection('btn-donate', 'donate', 'history');
});
