//Create your arrays an variables
var btn_add = document.getElementById("add");
var btn_end = document.getElementById("end");
var input = document.getElementById("input");
var list = document.getElementById("listing");
const todo = [];
//get DOM elements
//

btn_add.addEventListener("click", ()=>{
    //handle adding a new todo
    todo.push(input.value)

});

btn_end.addEventListener("click", ()=>{
    //handle finishing a todo
    
    //make sure your input is seen as a number
    x = Number( );
    //check if input really is a number
    if(isNaN(x)){
        //not a number
    }else{
        //is a number
    }

});

btn_delete.addEventListener("click", ()=>{
    //handle removing of a todo

    //make sure your input is seen as a number
    x = Number( );
    //check if input really is a number
    if(isNaN(x)){
        //not a number
    }else{
        //is a number
    }
});

function updateListing(){
 //print list of todo's
    list.innerHTML = ""
        todo.forEach(function(n) {
            list.innerHTML += "<li>"+n+"</li>"
        })
 //use loop to step trough the arrays
   
}