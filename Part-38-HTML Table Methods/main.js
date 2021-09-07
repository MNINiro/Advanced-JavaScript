var tab = document.getElementById("myTab");

//Ex-1-Caption handling
//Create caption (if there is an existing caption, it will be displayed)
tCap = tab.createCaption();
console.log(tCap);
console.log(tCap.innerHTML);
// document.write(tCap.innerHTML);

//Ex-1.1- suppose there is no caption in the HTML table then:
// tCap.innerHTML = "It's a new caption"
// console.log(tCap);

//Ex-1.2-Now activate HTML caption then:
tab.deleteCaption();
console.log(tab.caption);

//Ex-2- Table head handling
//Create head (if there is an existing head, it will be displayed)
tabHead = tab.createTHead();
console.log(tabHead);
console.log(tabHead.innerHTML);

// //Ex-2.1-Now commenting thead section of HTML then creating. It will show empty thead.
// //Now recreating a new thead
// tabHead = tab.createTHead();
// console.log(tabHead);
// console.log(tabHead.innerHTML="<tr> <th>SL</th> <th>FName</th> <th>Programs</th> </tr>");

//Ex-2.2-Remove table head
tabHead = tab.deleteTHead();
console.log(tabHead);


//Ex-3-Creating table foot. will show existing tFoot
var tabFoot = tab.createTFoot();
console.log(tabFoot);
console.log(tabFoot.innerHTML);

// //Ex-3.1-Now commenting tfoot section of HTML then creating.It will show empty tfoot.
// //Now recreating a new thead
// console.log(tabFoot.innerHTML = "<tr> <td>200</td> <td>ZZZ</td> <td>Dispatch</td> </tr>");

//Ex-3.2-Remove table foot
tabFoot = tab.deleteTFoot();
console.log(tabFoot);