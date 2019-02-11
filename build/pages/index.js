
	let titles = [];
	let years = [];
	let type = [];
	clear();

   var request = new XMLHttpRequest();
   request.open("GET", "data.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);



   for(var i =0;i<my_JSON_object.media.length;i++)
   {
   		titles.push(my_JSON_object.media[i]);

   }


var inc = 1
var yearsinc = 1

	for (var c in titles) {
		movieString = titles[c].title + '(' + titles[c].year + ')' + " \r" + titles[c].genre + '\r' + titles[c].type;	
		movieString.toString();
		console.log(movieString);
	    var newElement = document.createElement('div');
	    newElement.id = inc; 
	    newElement.className = "title";
	    newElement.innerHTML = movieString;
	    document.body.appendChild(newElement);
	    inc = inc+1; 
	} 

function clear(){
	for (var c in titles) {
		movieString = titles[c].title + '(' + titles[c].year + ')' + " \r" + titles[c].genre + '\r' + titles[c].type;	
		movieString.toString();
		console.log(movieString);
	    var newElement = document.createElement('div');
	    newElement.id = inc; 
	    newElement.className = "title";
	    newElement.innerHTML = movieString;
	    document.body.appendChild(newElement);
	    inc = inc+1; 
	} 
}

var arrLength =  titles.length + 1
for(var i=1; i<arrLength;i++){
	console.log(i);
	if(i%3==0 && i != 0 || i == 30){

		document.getElementById(i).style.paddingLeft = "850px";
		document.getElementById(i).style.marginTop = "-20px";
	}
	else if( i % 3 == 2 ){
		document.getElementById(i).style.color = "blue";
		document.getElementById(i).style.paddingLeft = "450px";
		
	}
	else{
		document.getElementById(i).style.color = "green";
		document.getElementById(i).style.paddingLeft = "50px";
		document.getElementById(i).style.paddingTop = "70px";
	}
}


function action(){
	var action = [];
	for(var i=1; i<arrLength;i++){
		if(document.getElementById(i).innerHTML.includes("action") == true ){
			action.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}
	}	
}

function scifi(){
	var scifi = [];
	for(var i=1; i<arrLength;i++){
		if(document.getElementById(i).innerHTML.includes("sci-fi") == true ){
			sci-fi.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}
	}	
}

function adventure(){
	var adventure = [];
	for(var i=1; i<arrLength;i++){
		if(document.getElementById(i).innerHTML.includes("adventure") == true ){
			adventure.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}
	}	
}

function crime(){
	var crime = [];
	for(var i=1; i<arrLength;i++){
		if(document.getElementById(i).innerHTML.includes("crime") == true ){
			crime.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}
	}	
}
function animation(){
	var animation = [];
	for(var i=1; i<arrLength;i++){
		if(document.getElementById(i).innerHTML.includes("action") == true ){
			animation.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}
	}	
}
function comedy(){
	var comedy = [];
	for(var i=1; i<arrLength;i++){
		if(document.getElementById(i).innerHTML.includes("comedy") == true ){
			comedy.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}
	}	
}

function drama(){
	var drama = [];
	for(var i=1; i<arrLength;i++){
		if(document.getElementById(i).innerHTML.includes("drama") == true ){
			drama.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}
	}	
}

function mystery(){
	var mystery = [];
	for(var i=1; i<arrLength;i++){
		if(document.getElementById(i).innerHTML.includes("mystery") == true ){
			mystery.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}
	}	
}

function thriller(){
	var thriller = [];
	for(var i=1; i<arrLength;i++){
		if(document.getElementById(i).innerHTML.includes("thriller") == true ){
			thriller.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}
	}	
}

function movies(){
	var movies = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("movie") == true ){
			movies.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}


function books(){
	var books = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("book") == true ){
			books.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}

function war(){
	var war = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("war") == true ){
			war.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}

function politics(){
	var politics = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("politics") == true ){
			politics.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}
function history(){
	var history = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("history") == true ){
			history.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}
function memoir(){
	var memoir = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("memoir") == true ){
			memoir.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}
function biography(){
	var biography = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("biography") == true ){
			biography.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}
function fooddrink(){
	var fooddrink = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("food&drink") == true ){
			fooddrink.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}
function western(){
	var western = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("western") == true ){
			western.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}
	}
}
function dragon(){
	var dragon = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("dragon") == true ){
			dragon.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}
function fantasy(){
	var fantasy = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("fantasy") == true ){
			fantasy.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}

function classics(){
	var classics = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("classics") == true ){
			classics.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}

function detective(){
	var detective = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("detective") == true ){
			detective.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}

function science(){
	var science = [];
	for(var i=1; i<arrLength;i++){	
		if(document.getElementById(i).innerHTML.includes("science") == true ){
			science.push(document.getElementById(i).innerHTML)
		}
		else {
			document.getElementById(i).innerHTML = ' '
		}

	}
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}







