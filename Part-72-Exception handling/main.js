// Ex-1
function add(x,y){
    z = x+y;
    document.write("Addition:",z,"<br>")
    return;
}

try{
    add(2,10);
    sub(10,5); //No such function has been created yet
    document.write("This code will not run",'<br>');
}
catch(e){
    //dafualt messages
    /*
    document.write("Message:",e.message,"<br>");
    document.write("Name:",e.name,"<br>");
    document.write("Stack:",e.stack,"<br>");
    */

    //Custom message
    document.write("Sub function has not been created yet!!!","<br>");
}
finally{
    document.write("but this line of code will definitely execute",'<br>','<br>');
}


// Ex-2
function getRectArea(w,h){
    if (isNaN(w) || isNaN(h)){
        throw "non number parameter"  //Alternate to exception
    }
}
try{
    getRectArea(10,'A');
}
catch(e){
    document.write(e);
}
document.write("<br><br> It is just a message")