let body = document.body;
body.onscroll = ()=>{
	document.getElementById('searchInput').className = 'searchInput'
	document.getElementById('searchInput').value = ''
}
function longInput(){
    document.getElementById('searchInput').className = 'longinput'
}
let property = 0
function nextTo(){
	property+=339.5
let div = document.getElementById('first')
div.style = `margin-left:-${property}px; transition:all 0.3s;`
if(property == 2716){
	property = 0}
}

function prewTo(){
property-=339.5
let div = document.getElementById('first')
div.style = `margin-left:-${property}px; transition:all 0.3s;`
if(property == 0){
	property = 3055.5}
}