var objPeople = [

	{username: 'cinthia',
	 password: 'fraire'},

	{username: 'karina',
	password: 'fraire'},

	{username: 'ivanna',
	 password: 'santos'},

	{username: 'dolores',
	 password: 'lizard'}

]

function login(){

var user = document.getElementById('userName').value.toLowerCase()
var pass = document.getElementById('password').value.toLowerCase()

for ( i = 0; i < objPeople.length; i++){
	if( user == objPeople[i].username && pass == objPeople[i].password){
		alert('good. you are in')
		return
	}else{
		alert('Wrong username or password')
		return
	}
}

}