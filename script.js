document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello, World!');
});

let arr = [];

function Generate() {
    arr = [];
    for (let i = 0; i < 1000; i++) {
        arr.push(Math.floor(Math.random() * 1000) + 1);
    }
    arr.toString = function() {
        return this.join(', ');
    };
    document.getElementById('arrayOutput').innerText = arr;
    document.querySelector('.result').innerText = 'Result: Generated array';
}

function Search() {
    const searchValue = Number(document.getElementById('searchValue').value);
    let result;
    const index = arr.indexOf(searchValue);
    if (index !== -1) {
        result = `Number ${searchValue} found at index ${index + 1}`;
    } else {
        result = `Number ${searchValue} not found`;
    }
    document.querySelector('.result').innerText = `Result: ${result}`;
}