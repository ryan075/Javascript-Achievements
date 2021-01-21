  
let button = document.getElementById('button');
let button2 = document.getElementById('button2');
let stats = document.getElementById('stats');
let stats2 = document.getElementById('stats2');
let stats3 = document.getElementById('stats3');
const nummers = [];


button.addEventListener('click', () => {
    // Put the 4 random numbers between 1 and 6 in a empty list.
    for (let i = 0; i < 4; i++) nummers.push(randomizer());;

    // save the lowest value in a let variable
    let min_number = Math.min.apply(Math, nummers);
    nummers.pop(min_number);

    optel = nummers[0] + nummers[1] + nummers[2];
    
    stats.innerHTML = "Stats: " + optel;
})

button2.addEventListener('click', () =>{

    document.location.reload();

});
function randomizer(range = 6){ 
    return Math.floor((Math.random() * range)) + 1;
}