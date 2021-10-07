//Ex-1- 
/*
function validData(){
    var ptrn = /^([^0-9\W]*)$/; //created pattern. If this symbols are found then value becomes invalid 
    if (ptrn.test(document.frm1.userNameField.value)){
        document.frm1.userNameField.style.backgroundColor = 'green';
        
    }else
    document.frm1.userNameField.style.backgroundColor = 'red';
}
document.frm1.userNameField.addEventListener("keyup",validData);
*/

//Ex-2-Alternate way
function validData(){
    var ptrn = /^([^0-9\W]*)$/; //created pattern. If this symbols are found then value becomes invalid 
    var emp = document.frm1.userNameField.value;

    if (ptrn.test(emp) && emp != ""){
        document.getElementById('usSmall').textContent = 'Right data type';
        document.getElementById('usSmall').style.color = "green";
    }else{
        document.getElementById('usSmall').textContent = 'Invalid data type';
        document.getElementById('usSmall').style.color = 'red';
    }
}
document.frm1.userNameField.addEventListener("keyup",validData);


