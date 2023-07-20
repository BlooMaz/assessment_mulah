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


function processData(csvData) {
    const tableBody = document.querySelector("#data-processed tbody");
    tableBody.innerHTML = "";
  
    const headers = ["Category", "Value"]; // First row contains the column headers
    const dataRows = csvData.split('\n').slice(1); // Split the CSV string into an array of rows and exclude the header row
  
    // Create header row
    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    tableBody.appendChild(headerRow);
  
    const valueColumn = [];
    for (const row of dataRows) {
      const columns = row.split(',');
      if (columns.length > 0) {
        valueColumn.push(parseInt(columns[1]));
      }
    }
  
    // Create and append rows for "Alpha", "Beta", and "Charlie"
    const newRowAlpha = document.createElement("tr");
    const newCellAlpha = document.createElement("td");
    newCellAlpha.textContent = "Alpha";
    newRowAlpha.appendChild(newCellAlpha);
    const newCellAlphaValue = document.createElement("td");
    newCellAlphaValue.textContent = valueColumn[4] + valueColumn[19];
    newRowAlpha.appendChild(newCellAlphaValue);
    tableBody.appendChild(newRowAlpha);
  
    const newRowBeta = document.createElement("tr");
    const newCellBeta = document.createElement("td");
    newCellBeta.textContent = "Beta";
    newRowBeta.appendChild(newCellBeta);
    const newCellBetaValue = document.createElement("td");
    newCellBetaValue.textContent = valueColumn[14] / valueColumn[6];
    newRowBeta.appendChild(newCellBetaValue);
    tableBody.appendChild(newRowBeta);
  
    const newRowCharlie = document.createElement("tr");
    const newCellCharlie = document.createElement("td");
    newCellCharlie.textContent = "Charlie";
    newRowCharlie.appendChild(newCellCharlie);
    const newCellCharlieValue = document.createElement("td");
    newCellCharlieValue.textContent = valueColumn[12] * valueColumn[11];
    newRowCharlie.appendChild(newCellCharlieValue);
    tableBody.appendChild(newRowCharlie);
  }


// Function to fetch the CSV file
function fetchCSVAndPopulateTable() {
    fetch("Table_Input.csv")
        .then((response) => response.text())
        .then((csvText) => {
            const rows = csvText.split("\n");
            const csvData = rows.map((row) => row.split(","));
            populateTable(csvData);
            processData(csvData);
        })
        .catch((error) => console.error("Error fetching CSV:", error));
}

// Load the CSV data and populate the table on page load
document.addEventListener("DOMContentLoaded", () => {
    fetchCSVAndPopulateTable();
});