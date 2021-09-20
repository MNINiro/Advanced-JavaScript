//CSS selector
//Ex-1-Element Selector

var pList = document.querySelectorAll('p');
console.log(pList);

var List = document.querySelectorAll('li');
console.log(List);
console.log(List.length);
/*
//Ex-2-Group Selector
var gList = document.querySelectorAll('div,p,li');
console.log(gList);
console.log(gList[0],gList[1]); //specific element

//Ex-3-universal selector -showing all elements
var uList = document.querySelectorAll('*');
console.log(uList);
console.log(uList.length);

//Ex-4-Class Selector
    //Ex-4.1-universal style class
    var cList = document.querySelectorAll('.game');
    console.log(cList);
    console.log(cList.length);

    //Ex-4.2-Accessing class by specific element id
    var cListID = document.getElementById("myL");
    var x = cListID.querySelectorAll('.game');
    console.log(x);
    console.log(x.length);

    //Ex-4.3-class from the entire document
    var eClass = document.querySelectorAll('.red');
    console.log(eClass);

    //Ex-4.4-class from the specific element (p)
    var sList = document.querySelectorAll('p.red');
    console.log(sList);

    //Ex-4.5-class from the more specific element (p)
    //only from where both classes are matched
    var mList = document.querySelectorAll('p.red.black');
    console.log(mList);

//Ex-5-ID Selector
var idList = document.querySelectorAll('#book');
console.log(idList);

    //Ex-5.1-More specific ID Selector
    var sidList = document.querySelectorAll('p#book');
    console.log(sidList);


//Ex-6-Attribute Selector
var attList = document.querySelectorAll('p[title]');
console.log(attList);    

    //Ex-6.1-Specific Attribute Selector
    var atList = document.querySelectorAll('p[title="myP1"]');
    console.log(atList); 
    
    //Ex-6.2-image by its attributes
    var imgList = document.querySelectorAll("img[width='30%'][height='20%']");
    console.log(imgList);
    
    //Ex-6.3-image by more specific attributes
    var imList = document.querySelectorAll("img[width='30%']");
    console.log(imList);
    
    //Ex-6.4
    var imList = document.querySelectorAll("img[height='20%']");
    console.log(imList);
    
    //Ex-6.5-classes where specific value is found
    var clList = document.querySelectorAll("[class ~= 'game' ]");
    console.log(clList);
    
    //Ex-6.6-classes where specific value is found at the first alone or with "-"
    var clsList = document.querySelectorAll("[class |= 'game' ]");
    console.log(clsList);
   
    //Ex-6.7-classes where specific value is found at the first
    var clssList = document.querySelectorAll("[class ^= 'game' ]");
    console.log(clssList);
    
    //Ex-6.8-classes where specific value is found at the end
    var c$List = document.querySelectorAll("[class $= 'game' ]");
    console.log(c$List);

    //Ex-6.9-classes where specific value is found anywhere
    var ccList = document.querySelectorAll("[class *= 'ga' ]");
    console.log(ccList);

//Ex-7-Pseudo class
//in case of 2 lists, fist/last of both will be considered
    //Ex-7.1-first-child (all)
    var fList = document.querySelectorAll(':first-child');
    console.log(fList);

    //Ex-7.2-first-child of specific element's
    var lfList = document.querySelectorAll('li:first-child');
    console.log(lfList);

    //Ex-7.3-last-child (all)
    var lList = document.querySelectorAll(':last-child');
    console.log(lList);

    //Ex-7.4-first-child of specific element's
    var llList = document.querySelectorAll('li:last-child');
    console.log(llList);
    
    //Ex-7.4-nth-child
    var ntList = document.querySelectorAll('li:nth-child(3)');
    console.log(ntList);
    
    //Ex-7.5-nth-child(even)
    var evList = document.querySelectorAll('li:nth-child(even)');
    console.log(evList);
    
    //Ex-7.6-nth-child(odd)
    var oddList = document.querySelectorAll('li:nth-child(odd)');
    console.log(oddList);
    
    //Ex-7.7-nth-last child
    var nlList = document.querySelectorAll('li:nth-last-child(1)');
    console.log(nlList);
   
    //Ex-7.8-empty child
    var empList = document.querySelectorAll(':empty');
    console.log(empList);
*/