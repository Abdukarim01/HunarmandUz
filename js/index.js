let body = document.body;
body.onscroll = ()=>{
	document.getElementById('searchInput').className = 'searchInput'
	document.getElementById('searchInput').value = ''
}
function longInput(){
    document.getElementById('searchInput').className = 'longinput'
}