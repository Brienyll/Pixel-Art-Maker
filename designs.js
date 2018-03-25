
// Select color input

// Select size input
height = $("#inputHeight").val();
weight = $("#inputWeight").val();

const submitB = $("input[type='submit']");
// When size is submitted by the user, call makeGrid()
submitB.click(function(e){
    e.preventDefault();
    makeGrid();
});
// Your code goes here!

function makeGrid() {
    console.log(height);
    }