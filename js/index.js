let body = document.body;
body.onscroll = ()=>{
	document.getElementById('searchInput').className = 'searchInput'
	document.getElementById('searchInput').value = ''
}
function longInput(){
    document.getElementById('searchInput').className = 'longinput'
}
let arr = ['335','670','1005','1340']
num = -1
function nextTo(){
	num++
	let div = document.getElementById('long-block');
    div.style = `margin-left:-${arr[num]}px; transition:all 0.3s;`
    if(num == 4){
    	num = -1
    }
}

let num2 = 4
function prewTo(){
	num2--
	let div = document.getElementById('long-block');
    div.style = `margin-left:-${arr[num2]}px; transition:all 0.3s;`
    if(num2 == -1){
    	num2 = 4
    }
}