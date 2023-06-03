const savedString = localStorage.getItem('savedString');
console.log('Retrieved string:', savedString);

window.open(savedString, '_self');