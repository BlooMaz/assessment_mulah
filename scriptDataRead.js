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
            if(!cell.contains("A")){
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

    newCell.textContent = "Beta"
    newRow.appendChild(newCell);
    newCell.textContent = valueColumn[14] / valueColumn[6]
    newRow.appendChild(newCell);
    tableBody.appendChild(newRow);

    newCell.textContent = "Charlie"
    newRow.appendChild(newCell);
    newCell.textContent = valueColumn[12] * valueColumn[11]
    newRow.appendChild(newCell);
    tableBody.appendChild(newRow);

    
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