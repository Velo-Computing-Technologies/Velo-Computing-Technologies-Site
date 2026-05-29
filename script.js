document.getElementById('inspect-btn').addEventListener('click', function() {
    const consoleBox = document.getElementById('console-log');
    
    // Slå på/av synlighet för loggen för att efterlikna ett terminalkommando
    if (consoleBox.classList.contains('hidden')) {
        consoleBox.classList.remove('hidden');
    } else {
        consoleBox.classList.add('hidden');
    }
});
