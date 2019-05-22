const profitAndLoss = {
    revenue: {
        january: "1000.00",
        february: "2000.00",
        march: "3000.00"
    },
    cogs: {
        january: "2000.00",
        february: "4000.00",
        march: "5000.00"
    },
    facility: {
        january: "300.00",
        february: "400.00",
        march: "500.00"
    }
}

loadTable = (financialSelection) => {
    let financialData;
    let header;
    if(financialSelection){
        financialData = profitAndLoss[financialSelection];
        header = capitalize(financialSelection);
    } else {
        financialData = profitAndLoss.revenue;
        header = "Revenue";
    }
    let data = "";
    Object.keys(financialData).forEach(function (key){
        data += `<p>${capitalize(key)}: ${financialData[key]}</p>`;
    });
    let financialHeader = `<h4>${header}</h4>`;
    document.getElementById("financialHeader").innerHTML = financialHeader;

    document.getElementById("data").innerHTML = data;
}

generateDropdown = () => {
    var revenueData = profitAndLoss;
    let data = `<select id="financesSelect" name="financesSelect" onchange="updateFinancials(this)">`;
    Object.keys(revenueData).forEach(function (key){
        data += `<option value="${key}">${capitalize(key)}</option>`;
    });
    document.getElementById("dropdown").innerHTML = data;
}

updateFinancials = (selection) => {
    loadTable(selection.value);
}

const capitalize = (stringToCapitalize) => {
    return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1)
}
