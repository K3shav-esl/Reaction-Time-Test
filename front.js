//checking the file 
console.log("the file is working");

//making some call to grab the elements in the html

let box = document.getElementById('colorbox');
let reactionSpan = document.getElementById('reactionTime');

//making the functions for calculating the reaction time

//the variable for showing the green color in random times

let startTime;
let endTime;
box.addEventListener('click', () => {
    let showTime = 2000 + (12000 - 9000) * Math.random();
    box.setAttribute('style', "background-color: red")
    setTimeout(() => {
        color = 'chartreuse'
        box.setAttribute('style', `background-color: ${color}`)
        startTime = new Date();
    }, showTime);
    if (color = 'chartreuse') {
        box.addEventListener('click', () => {
            const endTime = new Date();
            var reactionTime = endTime - startTime;
            let time = document.getElementById('reactionTime');
            console.log(reactionTime);
            time.innerText = "";
            time.innerText = `${reactionTime}ms`;
            color = 'yellow';
            box.setAttribute('style', `background-color: ${color}`)
        })
    }
});

