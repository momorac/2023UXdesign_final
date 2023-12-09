
let myPrice = 20000;
let minPrice = 10000;
let maxPrice = 27000;

function calculateScale(minPrice, maxPrice) {
    const scale = 0;

}

function drawChart() {
    const chartContainer = document.querySelector('.chart');

    for (let i = 0; i < 12000; i++) {
        const newDot = document.createElement('div');
        newDot.setAttribute('class','dot')
        newDot.classList.add('dot');
        chartContainer.appendChild(newDot);
    }
}
