const profitAndLoss = {
    revenue: {
        january: "1000.00",
        february: "2000.00",
        march: "3000.00"
    }
}

loadTable = () => {
    var revenueData = profitAndLoss.revenue;
    let data = "";
    Object.keys(revenueData).forEach(function (key){
        data += `<p>${capitalize(key)}: ${revenueData[key]}</p>`;
    });
    document.getElementById("data").innerHTML = data;
}

const capitalize = (stringToCapitalize) => {
    return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1)
}
