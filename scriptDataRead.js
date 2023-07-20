// Function to read the CSV file and populate the table
function populateTable(csvData) {
    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = "";

    const headers = csvData[0]; // First row contains the column headers
    const dataRows = csvData.slice(1); // Exclude the first row (header) from the data rows

    // Create header row
    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    tableBody.appendChild(headerRow);

    // Create data rows
    dataRows.forEach((row) => {
        const newRow = document.createElement("tr");
        row.forEach((cell) => {
            const newCell = document.createElement("td");
            newCell.textContent = cell;
            newRow.appendChild(newCell);
        });
        tableBody.appendChild(newRow);
    });
}


// Function to read the CSV file and populate the table
function processData(csvData) {
    const tableBody = document.querySelector("#data-processed tbody");
    tableBody.innerHTML = "";

    const headers = ["Category","Value"]; // First row contains the column headers
    const dataRows = csvData.slice(1); // Exclude the first row (header) from the data rows
    const valueColumn =[];
    // Create header row
    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    tableBody.appendChild(headerRow);
    var i=0;
    dataRows.forEach((row) => {
        
        row.forEach((cell) => {
            if(!cell.includes("A")){
                valueColumn[i]=cell;
                i++;
            }
            
        });
        
    });
    
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    newCell.textContent = "Alpha"
    newRow.appendChild(newCell);
    newCell.textContent = valueColumn[4] + valueColumn[19]
    newRow.appendChild(newCell);
    tableBody.appendChild(newRow);

    const newRow1 = document.createElement("tr");
    const newCell1 = document.createElement("td");
    newCell1.textContent = "Beta"
    newRow1.appendChild(newCell1);
    newCell1.textContent = valueColumn[14] / valueColumn[6]
    newRow1.appendChild(newCell1);
    tableBody.appendChild(newRow1);

    const newRow2 = document.createElement("tr");
    const newCell2 = document.createElement("td");
    newCell2.textContent = "Charlie"
    newRow2.appendChild(newCell2);
    newCell2.textContent = valueColumn[12] * valueColumn[11]
    newRow2.appendChild(newCell2);
    tableBody.appendChild(newRow2);

    
}  


// Function to fetch the CSV file
function fetchCSVAndPopulateTable() {
    fetch("Table_Input.csv")
        .then((response) => response.text())
        .then((csvText) => {
            const rows = csvText.split("\n");
            const csvData = rows.map((row) => row.split(","));
            populateTable(csvData);
            processData(csvData)
        })
        .catch((error) => console.error("Error fetching CSV:", error));
}

// Load the CSV data and populate the table on page load
document.addEventListener("DOMContentLoaded", () => {
    fetchCSVAndPopulateTable();
});