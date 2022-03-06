//import the data from data.js

const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //first, clear out any existing data
    tbody.html("");

    //next, loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow)=> {
        //append a row to the table body
        let row =tbody.append("tr");

        // loop through each field in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    // get datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    //check if anything was entered in filter
    //and filter based on input
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //rebuild table based on filtered data
    buildTable(filteredData);
}

//attach event to listen for button
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table when the page loads
buildTable(tableData);
