// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR(tableID) {
    let table = document.getElementById(tableID);


    //Add a row to the end of the table
    let newRow = table.insertRow(-1);
    
    //Add a new cell for every column in the new row
    for(let col=0; col < numCols;col++){
        console.log(col);
        newRow.insertCell(col);
    }

    //Increment numRows since we just created a new one
    numRows += 1;
}

// Add a column
function addC(tableID) {
    //If there is no rows that exist, we will create one.
    if(numRows == 0){
        addR(tableID);
    }

    //Acessing all rows via a nodelist
    const rows = document.querySelectorAll("tr");
    console.log(rows);
    rows.forEach(
        function(node){
            node.insertCell(-1);
        }
    );

    numCols += 1;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
    
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}