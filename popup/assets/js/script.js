const input_ = document.querySelector('#new-tab-input');
const submitBtn = document.querySelector('#submit-btn');
const resetBtn = document.querySelector('#reset-btn');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const input_v = input_.value;
    localStorage.setItem('savedString', input_v);
    console.log('String saved successfully.')
});

resetBtn.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('savedString');
    console.log('String removed successfully.');
});