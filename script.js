var createPolitician = function(name, partyColor)
{
	var politician = {};
	politician.name = name;
	politician.electionResults = null;
	politician.totalVotes = 0; 
	politician.partyColor = partyColor;

	politician.announceName = function(){
    	console.log("Here are the results for " + this.name +  "!");
		console.log("Her party color is " + this.partyColor);
	};
	politician.announceName();

	politician.tallyUpTotalVotes = function()
	{
		this.totalVotes = 0;

		for (var i = 0; i < this.electionResults.length; i++)
		{
			this.totalVotes = this.totalVotes + this.electionResults[i];
		}
	};
	
    return politician;
};
 
var sandberg = createPolitician("Sheryl Sandberg", [132, 17, 11]);
var barra = createPolitician("Mary Barra", [245, 141, 136]);

console.log(sandberg.name + "'s color is: " + sandberg.partyColor);
console.log(barra.name + "'s color is: " + barra.partyColor);

sandberg.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
barra.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2 , 3, 1];

//Florida (Array Position 9)
sandberg.electionResults[9] = 1;
barra.electionResults[9] = 28;

//California (Array Position 4)
sandberg.electionResults[4] = 17;
barra.electionResults[4] = 38;

//Texas (Array Position 43)
sandberg.electionResults[43] = 11;
barra.electionResults[43] = 27;

console.log(sandberg.electionResults);
console.log(barra.electionResults);

var setStateResults = function(state){
  
    theStates[state].winner = null;
  
    if (sandberg.electionResults[state] > barra.electionResults[state]){
        theStates[state].winner = sandberg;
      
    } else if (sandberg.electionResults[state] < barra.electionResults[state]){
        theStates[state].winner = barra;
    }
  
    var stateWinner = theStates[state].winner;
 
    if (stateWinner !== null){
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11,32,57];
    }
  
    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    
    var candidate1Name = body.children[0].children[0];
    var candidate1Results = body.children[0].children[1];
  
    var candidate2Name = body.children[1].children[0];
    var candidate2Results = body.children[1].children[1];
  
    var winnersName = body.children[2].children[1];
  
    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
    
    candidate1Name.innerText = sandberg.name;
    candidate1Results.innerText = sandberg.electionResults[state];
    
    candidate2Name.innerText = barra.name;
    candidate2Results.innerText = barra.electionResults[state];
    
    if (theStates[state].winner === null){
        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.name;
    }
}

sandberg.tallyUpTotalVotes();
barra.tallyUpTotalVotes();

console.log(sandberg.totalVotes);
console.log(barra.totalVotes);

var winner = "???";

if (sandberg.totalVotes > barra.totalVotes) {
    winner = sandberg.name;
  }else if (sandberg.totalVotes < barra.totalVotes) {
    winner = barra.name;
  }else{
    winner = "DRAW.";
  }
console.log("AND THE WINNER IS…" + winner + "!!!");

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = sandberg.name;
row.children[1].innerText = sandberg.totalVotes;
row.children[2].innerText = barra.name;
row.children[3].innerText = barra.totalVotes;
row.children[5].innerText = winner;

