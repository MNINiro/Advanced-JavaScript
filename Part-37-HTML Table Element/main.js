var tab = document.getElementById("myTab");

//Ex-1-Caption handling
tab.caption;
console.log(tab.caption);

var tCap = tab.caption;
document.write(tCap.innerHTML,'<br>');

//changing caption
tCap.innerHTML = "New Caption";
document.write('Changed Caption: ',tCap.innerHTML,'<br>');


//Ex-2-Table head (thead)
tabHead = tab.tHead;
console.log(tabHead);
document.write(tabHead.innerHTML);

//Replacing existing tHead (maintain same structute of html)
tabHead.innerHTML= "<tr> <th>SL</th> <th>FName</th> <th>Programme</th> </tr>";
document.write('<br>','<br>')


//Ex-3-Table foot (tFoot)
tabFoot = tab.tFoot;
console.log(tabFoot);
document.write(tabFoot.innerHTML);

// Replacing existing tFoot (maintain same structute of html)
tabFoot.innerHTML= "<tr> <td>100</td> <td>Aman</td> <td>Sales</td> </tr>";
document.write('<br>','<br>')

//Ex-4-Table Body (tBody)
tabBody = tab.tBodies;
console.log(tabBody);
console.log(tabBody[0]); //use index if there are multiple bodies
document.write(tabBody[0].innerHTML); //Show only body of specific index

