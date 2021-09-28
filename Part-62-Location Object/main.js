/*//Properties
var result = window.location.hash; //write #service or anything at the end of the URL
console.log(result);

var result = window.location.hash = '#team'; //(set) Assigning new hash tag
console.log(result);

var result = window.location.host; 
console.log(result);

var result = window.location.pathname; 
console.log(result);

var result = window.location.href= 'https://www.incis.info'; 
console.log(result);

var result = window.location.port; 
console.log(result);

var result = window.location.protocol; 
console.log(result);

var result = window.location.origin; 
console.log(result);

var result = window.location.search; 
console.log(result);
*/

//Methods
// window.location.reload(); //nonstop reload

// changing current page to a newly assigned page (browser history will prevail)
window.location.assign('https://www.incis.info');

// changing current page to a newly assigned page (browser history will not prevail)
window.location.replace('https://www.incis.info');


