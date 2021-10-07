//Ex-1- cookies
document.cookie = "username=MNI"; 
document.cookie = "username=MNI; max-age = " + 60 * 60 * 24 * 10; //for 10 days
document.cookie = "username=MNI; max-age = " + 60 * 60 * 24 * 10 + "; path=/"; 
alert(document.cookie);


//Ex-2-until certain date and time
/* document.cookie = "username=MNI; expires = Wednesday, 6-Oct-2021 10:00:00 UTC";
alert(document.cookie);
*/

//Ex-3- domain: It's applicable for both domain and subdomain
// but subdomain can not be applied on domain
/* document.cookie = "username=MNI; domain = incis.info";
// subdomain
register.incis.info
 alert(document.cookie);
*/

// Ex-4-Path: If path is not defined then it will use default dir as a path
// document.cookie = "username = MNI; path=/";
// document.cookie = "username = MNI; path=/home"; //will not keep any subdomain

//Ex-5-Replace cookies
/*document.cookie = "username = MNI";
document.cookie = "username = Niro";
*/
//Ex-6-Append cookies
// document.cookie = "username = MNI";
// document.cookie = "userID = 101";
// document.cookie = "email = xyz@gmail.com";
// document.cookie = "language = English";

//Ex-7-Reading cookies (using form element for the next example)
// alert(document.cookie);

/*
function setCookies(){
    document.cookie  = "name=" + document.frm.name.value + "; max-age = " + 60 * 60 * 24 * 10;
    document.cookie  = "email=" + document.frm.email.value + "; max-age = " + 60 * 60 * 24 * 10;
    document.cookie  = "language=" + document.frm.lang.value + "; max-age = " + 60 * 60 * 24 * 10;
}
*/

/*
//alert(document.cookie) will display like this
//name = MNI; email=xyz@email.com; language=English
//to store in an array, above o/p needs to be splited
function getCookies(){
    var cookiesArray = document.cookie.split(";");
    for (i=0; i<cookiesArray.length; i++){
        var valArray = cookiesArray[i].split("=");
        if(valArray[0].trim() =='name') {
            document.frm.name.value = valArray[1];
            console.log(valArray[1]);
        }
        else if(valArray[0].trim() == 'email') {
            document.frm.email.value = valArray[1];
            console.log(valArray[1]);
        }
        else if(valArray[0].trim() =='language') {
            document.frm.lang.value = valArray[1];
            console.log(valArray[1]);
        }
    } 
}
*/

/*
// Ex-8-Deleting Cookies by setting backward date
function delCookies(){
    document.cookie  = "name=" + document.frm.name.value + "; expires = Friday, 1-Jan-2021 00:00:01 GMT";
    document.cookie  = "email=" + document.frm.email.value + "; expires = Friday, 1-Jan-2021 00:00:01 GMT";
    // document.cookie  = "language=" + document.frm.lang.value + "; expires = Friday, 1-Jan-2021 00:00:01 GMT";
    document.cookie  = "language=" + document.frm.lang.value + "; max-age=-1"; //Alternate way
}
*/

/*
// Ex-9-Updating cookies
function upCookies(){
    document.cookie  = "email=" + document.frm.email.value + "; max-age = " + 60 * 60 * 24 * 10;
}
*/

/*
// Ex-10-Checking cookies enabled or not
console.log(navigator.userAgent);

//checking if browser's cookies are enabled or not in settings
if(navigator.cookieEnabled){
    document.write("Cookies are enabaled");
}else{
    document.write("Cookies are disabaled");
}
*/