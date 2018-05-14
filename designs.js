function makeGrid() {    
// Select color input
// Select size input
let height, weight, rows, canvas, cell;

canvas = $('#pixelCanvas');
height = $("#inputHeight").val();
width = $("#inputWidth").val();

canvas.children().remove();

for (x = 0; x < height; x++) {
	canvas.append('<tr></tr>');
    }

rows = $('tr');    

for (y = 0; y < width; y++) {
    rows.append('<td></td>');
    } 
cell = canvas.find('td');

cell.click(function() {
    // Select color input
    let color;
    color = $("#colorPicker").val();
    $(this).attr('bgcolor', color);
});
}

const submitB = $("input[type='submit']");
// When size is submitted by the user, call makeGrid()
submitB.click(function(e){
    e.preventDefault();
    makeGrid();
});
