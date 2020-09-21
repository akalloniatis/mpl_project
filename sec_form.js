
/*--for select university--*/
$(document).ready(function () {
	$("#idruma").change(function () {
		var val = $(this).val();
		if (val == "item1") {
			$("#sxolh").html("<option disabled selected value='v9'> -- επιλέξτε σχολή -- </option><option value='v1'>Θετικών Επιστημών</option><option value='v2'>Φιλοσοφική</option>");
		} else if (val == "item2") {
			$("#sxolh").html("<option disabled selected value='v10'> -- επιλέξτε σχολή -- </option><option value='v3'>Καλών Τεχνών</option><option value='v4'>Πολυτεχνική</option>");
		} else if (val == "item3") {
			$("#sxolh").html("<option disabled selected value='v11'> -- επιλέξτε σχολή -- </option><option value='v5'>Θετικών και Τεχνολογικών Επιστημών</option><option value='v6'>Κοινωνικών Επιστημών</option>");
		} else if (val == "item0") {
			$("#sxolh").html("<option value=''>-- επιλέξτε σχολή -- </option>");
		}
	});
});
$(document).ready(function () {
	$("#sxolh").change(function () {
		var val = $(this).val();
		if (val == "v1") {
			$("#tmhma").html("<option disabled selected> -- επιλέξτε τμήμα -- </option><option>Πληροφορικής και Τηλεπικοινωνιών</option><option>Μαθηματικών</option>");
		} else if (val == "v2") {
			$("#tmhma").html("<option disabled selected> -- επιλέξτε τμήμα -- </option><option>Φιλολογίας</option><option>Ιστορίας και Αρχαιολογίας</option>");
		} else if (val == "v3") {
			$("#tmhma").html("<option disabled selected> -- επιλέξτε τμήμα -- </option><option>Θεάτρου</option><option>Κινηματογράφου</option>");
		} else if (val == "v4") {
			$("#tmhma").html("<option disabled selected> -- επιλέξτε τμήμα -- </option><option>Πολιτικών Μηχανικών</option><option>Μηχανολόγων Μηχανικών</option>");
		}else if (val == "v5") {
			$("#tmhma").html("<option disabled selected> -- επιλέξτε τμήμα -- </option><option>Χημείας</option><option>Βιολογίας</option>");
		}else if (val == "v6") {
			$("#tmhma").html("<option disabled selected> -- επιλέξτε τμήμα -- </option><option>Ψυχολογία</option><option>Κοινωνιολογία</option>");
		}else if (val == "v0") {
			$("#tmhma").html("<option value=''>-- επιλέξτε τμήμα -- </option>");
		}
	});
});

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

var fname2 = document.getElementById("fname2");
function fname_fun2(){
	var i; var count=0;
	for(i = 0; i < fname2.value.length; i++)
		if(fname2.value[i] == fname2.value[i].toUpperCase())
			count = count + 1;
	if(count == fname2.value.length){
		fname2.setCustomValidity('');
		document.getElementById("fname_err2").innerHTML = "";
	}
	else{
		fname2.setCustomValidity("Κεφαλαίοι Χαρακτήρες");
		document.getElementById("fname_err2").innerHTML = "Κεφαλαίοι Χαρακτήρες";
	}
}
fname2.onkeyup = fname_fun2;

var lname2 = document.getElementById("lname2");
function lname_fun2(){
	var i; var count=0;
	for(i = 0; i < lname2.value.length; i++)
		if(lname2.value[i] == lname2.value[i].toUpperCase())
			count = count + 1;
	if(count == lname2.value.length){
		lname2.setCustomValidity('');
		document.getElementById("lname_err2").innerHTML = "";
	}
	else{
		lname2.setCustomValidity("Κεφαλαίοι Χαρακτήρες");
		document.getElementById("lname_err2").innerHTML = "Κεφαλαίοι Χαρακτήρες";
	}
}
lname2.onkeyup = lname_fun2;

var fname3 = document.getElementById("fname3");
function fname_fun3(){
	var i; var count=0;
	for(i = 0; i < fname3.value.length; i++)
		if(fname3.value[i] == fname3.value[i].toUpperCase())
			count = count + 1;
	if(count == fname3.value.length){
		fname3.setCustomValidity('');
		document.getElementById("fname_err3").innerHTML = "";
	}
	else{
		fname3.setCustomValidity("Κεφαλαίοι Χαρακτήρες");
		document.getElementById("fname_err3").innerHTML = "Κεφαλαίοι Χαρακτήρες";
	}
}
fname3.onkeyup = fname_fun3;

var lname3 = document.getElementById("lname3");
function lname_fun3(){
	var i; var count=0;
	for(i = 0; i < lname3.value.length; i++)
		if(lname3.value[i] == lname3.value[i].toUpperCase())
			count = count + 1;
	if(count == lname3.value.length){
		lname3.setCustomValidity('');
		document.getElementById("lname_err3").innerHTML = "";
	}
	else{
		lname3.setCustomValidity("Κεφαλαίοι Χαρακτήρες");
		document.getElementById("lname_err3").innerHTML = "Κεφαλαίοι Χαρακτήρες";
	}
}
lname3.onkeyup = lname_fun3;

/*--for password validation --*/
var password = document.getElementById("password"),confirm_password = document.getElementById("confirm_password");
function input_length(){
	if((password.value.length > 0) && (password.value.length < 6)){
		password.setCustomValidity("Τουλάχιστον 6 χαρακτήρες");
		document.getElementById("password_err").innerHTML = "Τουλάχιστον 6 Χαρακτήρες";}
	else{
		password.setCustomValidity('');
		document.getElementById("password_err").innerHTML = "";}
}
function validatePassword(){
	if(password.value != confirm_password.value) {
		confirm_password.setCustomValidity("Οι κωδικοί δεν ταιριάζουν");
		document.getElementById("con_password_err").innerHTML = "Οι κωδικοί δεν ταιριάζουν";}
	else {
		confirm_password.setCustomValidity('');
		document.getElementById("con_password_err").innerHTML = "";}
}
password.onkeyup = input_length;
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

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

var email2 = document.getElementById("email2");
function email_fun2(){
	var i; var count=0;
	for(i = 0; i < email2.value.length; i++){
		if(email2.value[i] == '@') count = count + 1;
		if(email2.value[i] == '.') count = count + 1;}
	if(count == 2){
		email2.setCustomValidity('');
		document.getElementById("email_err2").innerHTML = "";
	}
	else{
		email2.setCustomValidity("Εισάγετε έγκυρο e-mail");
		document.getElementById("email_err2").innerHTML = "Εισάγετε έγκυρο e-mail";
	}
}
email2.onkeyup = email_fun2;

var email3 = document.getElementById("email3");
function email_fun3(){
	var i; var count=0;
	for(i = 0; i < email3.value.length; i++){
		if(email3.value[i] == '@') count = count + 1;
		if(email3.value[i] == '.') count = count + 1;}
	if(count == 2){
		email3.setCustomValidity('');
		document.getElementById("email_err3").innerHTML = "";
	}
	else{
		email3.setCustomValidity("Εισάγετε έγκυρο e-mail");
		document.getElementById("email_err3").innerHTML = "Εισάγετε έγκυρο e-mail";
	}
}
email3.onkeyup = email_fun3;

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

var tel2 = document.getElementById("tel2");
function tel_fun2(){
	var i; var count=0;
	for(i = 0; i < tel2.value.length; i++)
		if(tel2.value[i].match(/[0-9]/g))
			count = count + 1;
	if(count == 10){
		tel2.setCustomValidity('');
		document.getElementById("tel_err2").innerHTML = "";
	}
	else{
		tel2.setCustomValidity("10 ψηφία");
		document.getElementById("tel_err2").innerHTML = "Εισάγετε 10-ψηφιο αριθμό τηλεφώνου";
	}
}
tel2.onkeyup = tel_fun2;

var tel3 = document.getElementById("tel3");
function tel_fun3(){
	var i; var count=0;
	for(i = 0; i < tel3.value.length; i++)
		if(tel3.value[i].match(/[0-9]/g))
			count = count + 1;
	if(count == 10){
		tel3.setCustomValidity('');
		document.getElementById("tel_err3").innerHTML = "";
	}
	else{
		tel3.setCustomValidity("10 ψηφία");
		document.getElementById("tel_err3").innerHTML = "Εισάγετε 10-ψηφιο αριθμό τηλεφώνου";
	}
}
tel3.onkeyup = tel_fun3;

var tel4 = document.getElementById("tel4");
function tel_fun4(){
	var i; var count=0;
	for(i = 0; i < tel4.value.length; i++)
		if(tel4.value[i].match(/[0-9]/g))
			count = count + 1;
	if(count == 10){
		tel4.setCustomValidity('');
		document.getElementById("tel_err4").innerHTML = "";
	}
	else{
		tel4.setCustomValidity("10 ψηφία");
		document.getElementById("tel_err4").innerHTML = "Εισάγετε 10-ψηφιο αριθμό τηλεφώνου";
	}
}
tel4.onkeyup = tel_fun4;

var tel5 = document.getElementById("tel5");
function tel_fun5(){
	var i; var count=0;
	for(i = 0; i < tel5.value.length; i++)
		if(tel5.value[i].match(/[0-9]/g))
			count = count + 1;
	if(count == 10){
		tel5.setCustomValidity('');
		document.getElementById("tel_err5").innerHTML = "";
	}
	else{
		tel5.setCustomValidity("10 ψηφία");
		document.getElementById("tel_err5").innerHTML = "Εισάγετε 10-ψηφιο αριθμό τηλεφώνου";
	}
}
tel5.onkeyup = tel_fun5;

/*-- for zip code validation --*/

var tk = document.getElementById("tk");
function tk_fun(){
	var i; var count=0;
	for(i = 0; i < tk.value.length; i++)
		if(tk.value[i].match(/[0-9]/g))
			count = count + 1;
	if(count == 5){
		tk.setCustomValidity('');
		document.getElementById("tk_err").innerHTML = "";
	}
	else{
		tk.setCustomValidity("5 ψηφία");
		document.getElementById("tk_err").innerHTML = "Εισάγετε 5-ψηφιο ταχυδρομικό κώδικα";
	}
}
tk.onkeyup = tk_fun;

/*--for select city --*/
$(document).ready(function () {
	$("#nomos").change(function () {
		var val = $(this).val();
		if (val == "item1") {
			$("#city").html("<option disabled selected > -- επιλέξτε πόλη -- </option><option>ΑΘΗΝΑ</option>");
		} else if (val == "item2") {
			$("#city").html("<option disabled selected> -- επιλέξτε πόλη -- </option><option>ΘΕΣΣΑΛΟΝΙΚΗ</option>");
		} else if (val == "item3") {
			$("#city").html("<option disabled selected> -- επιλέξτε πόλη -- </option><option>ΡΕΘΥΜΝΟ</option>");
		} else if (val == "item0") {
			$("#city").html("<option value=''>-- επιλέξτε πόλη -- </option>");
		}
	});
});