// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR(tableID) {
    let table = document.getElementById(tableID);

    //If we have 0 rows, we need to add 1 column (cell) after inserting our first row.
    if(numRows == 0 && numCols == 0){
        numRows+=1;
        numCols+=1;

        let newRow = table.insertRow(-1);
        for(let i = 0; i < numCols; i++){
            newRow.insertCell(i);
        }

        //We stop the function here to prevent adding another row
        return;
    }

    //Add a row to the end of the table
    let newRow = table.insertRow(-1);
   
    //Add a new cell for every column in the new row
    for(let col=0; col < numCols;col++){
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
        //We stop the function here to prevent adding another column
        return;
    }

    //Acessing all rows via a nodelist
    let rows = document.querySelectorAll("tr");
    console.log(rows);

    rows.forEach(
        function(node){
            node.insertCell(-1);
        }
    );

    numCols += 1;


}

// Remove a row
function removeR(tableID) {
    // BONUS TODO: Give user option to remember number of columns when deleting 1st row
    if(numRows == 0){
        alert("Can't delete a row that doesn't exist!");
        return
    }

    if(numRows == 1){
        numCols = 0;
    }

    document.getElementById(tableID).deleteRow(0);
    numRows -= 1;

    console.log("Number of Columns: " + numCols);
    console.log("Number of Rows: " + numRows);

    
}

// Remove a column
function removeC(tableID) {
    console.log(numCols);
    console.log(numRows);
    if(numCols == 0){
        alert('You have no columns to remove!!');
        return;
    }
    
    //Acessing all rows via a nodelist
    let rows = document.querySelectorAll("tr");
    rows.forEach(
        function(node){
            node.deleteCell(-1);
        }
    );
    
    numCols -= 1;

    if(numCols == 0){
        for(let i = 0; i < rows.length; i++){
            document.getElementById(tableID).deleteRow(0)
        }
        numRows = 0;
    }
}

// Set global variable for selected color
function selectColor(){
    // This is the variable of the color that the user selects using a user dropdown menu
    colorSelected = document.getElementById("selectColorId").value;
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