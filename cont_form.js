/*-- for names to be upper case --*/
var fname = document.getElementById("fname");
function fname_fun(){
	var i; var count=0;
	for(i = 0; i < fname.value.length; i++){
		if(fname.value[i] == fname.value[i].toUpperCase()){
			count = count + 1;
		}
	}
	if(count == fname.value.length){
		fname.setCustomValidity('');
		document.getElementById("fname_err").innerHTML = "";
	}
	else{
		fname.setCustomValidity("Κεφαλαίοι Χαρακτήρες");
		document.getElementById("fname_err").innerHTML = "Κεφαλαίοι Χαρακτήρες";
	}
}
fname.onkeyup = fname_fun;

var lname = document.getElementById("lname");
function lname_fun(){
	var i; var count=0;
	for(i = 0; i < lname.value.length; i++)
		if(lname.value[i] == lname.value[i].toUpperCase())
			count = count + 1;
	if(count == lname.value.length){
		lname.setCustomValidity('');
		document.getElementById("lname_err").innerHTML = "";
	}
	else{
		lname.setCustomValidity("Κεφαλαίοι Χαρακτήρες");
		document.getElementById("lname_err").innerHTML = "Κεφαλαίοι Χαρακτήρες";
	}
}
lname.onkeyup = lname_fun;

/*-- for email validation --*/
var email = document.getElementById("email");
function email_fun(){
	var i; var count=0;
	for(i = 0; i < email.value.length; i++){
		if(email.value[i] == '@') count = count + 1;
		if(email.value[i] == '.') count = count + 1;}
	if(count == 2){
		email.setCustomValidity('');
		document.getElementById("email_err").innerHTML = "";
	}
	else{
		email.setCustomValidity("Εισάγετε έγκυρο e-mail");
		document.getElementById("email_err").innerHTML = "Εισάγετε έγκυρο e-mail";
	}
}
email.onkeyup = email_fun;

/*-- for phone number validation --*/

var tel = document.getElementById("tel");
function tel_fun(){
	var i; var count=0;
	for(i = 0; i < tel.value.length; i++)
		if(tel.value[i].match(/[0-9]/g))
			count = count + 1;
	if(count == 10){
		tel.setCustomValidity('');
		document.getElementById("tel_err").innerHTML = "";
	}
	else{
		tel.setCustomValidity("10 ψηφία");
		document.getElementById("tel_err").innerHTML = "Εισάγετε 10-ψηφιο αριθμό τηλεφώνου";
	}
}
tel.onkeyup = tel_fun;
