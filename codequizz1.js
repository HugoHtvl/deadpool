let yearProposale

while (yearProposale != "1918") {
yearProposale = parseInt(prompt("what is the year of birth of captain america ?"));

     if (yearProposale < "1918"){
        alert("it's more");
    } else if (yearProposale > "1918"){
        alert("it's less");
    } else {
        console.log("error");
    }
}
alert("win");