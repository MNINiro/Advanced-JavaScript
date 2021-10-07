// Ex-1-Storing key and value until browser closes 
window.sessionStorage.setItem('username','Niro');
window.sessionStorage.setItem('email','mniniro@hotmail.com');
console.log(sessionStorage)
console.log('Length:',sessionStorage.length)

/*
// Ex-2-Retreiving data from client PC
console.log(sessionStorage.getItem('username'));
console.log(sessionStorage.getItem('email'));

// Ex-3 Retreiving key
for (i=0; i<sessionStorage.length; i++){
    console.log(sessionStorage.key(i));    
}

// Ex-4-Removing single value
// sessionStorage.removeItem('email');

// Ex-5-Removing all value
sessionStorage.clear();
*/
