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


function register(){

var newUser = document.getElementById('newUserName').value.toLowerCase()
var newPassword = document.getElementById('newPassword').value.toLowerCase()
var newUsers = {
	username: newUser,
	password: newPassword
}
	for(i = 0; i < objPeople.length; i++){
		if(newUser == objPeople[i].username){
			alert('This Name Is Already Taken! Sorry!')
			return
		}
	}
	
	objPeople.push(newUsers)
	console.log(objPeople)

}