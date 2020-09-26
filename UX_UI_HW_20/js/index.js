function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter The Password - contact me then I will share the password. cc.youngjacky@gmail.com','');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "1") {
alert('Success');
// window.open('https://www.nike.com');
 // window.open("https://www.w3schools.com");
// window.location.href = "https://www.nike.com";
location.href = "https://www.nike.com";

break;
} 
testV+=1;
var pass1 = 
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
history.go(-1);
return " ";
} 


function fade() {
$('.preloader').fadeOut("slow");
}
setTimeout(fade, 3000);




