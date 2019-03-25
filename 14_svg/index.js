var selection0 = d3.select("body");
console.log(selection0);
//groups: Array[body], parents: Array[html]

var selection1 = d3.selectAll("body");
console.log(selection1);
//groups: NodeList[body], parents: Array[html]

var selection2 = d3.select("h2");
console.log(selection2);
//groups: Array[h2], parents: Array[html]

var selection3 = d3.selectAll("h2");
console.log(selection3);
//groups: NodeList[h2, h2, h2], parents: Array[html]

//didn't work when I forgot to wrap it all in the table tag
//can keep chaining them
var selection4 = d3.selectAll("tr").selectAll("td");
console.log(selection4);
//groups: 3XNodeList[td, td, td], parents: Array[tr, tr, tr]

var selection5 = d3.selectAll("section");
console.log(selection5);
//groups: NodeList[section, section, section], parents: Array[html]

var append0 = d3.selectAll("section").append("p");
console.log(append0);
//groups: Array[p, p, p], parents: Array[html]

document.body.__data__ = 42;

var databound0 = d3.select("body").datum(42);
console.log(databound0);
//groups: Array[body], parents: Array[html]

//appended at the end of the body
var databound1 = d3.select("body").datum(42).append("h1");
console.log(databound1);
//groups: Array[h1], parents: Array[html]

var numbers = [4, 5, 18, 23, 42];
var databound1 = d3.selectAll("div").data(numbers);
console.log(databound1);
//enter: Array[Object{data: 4}, Object{data: 5}...], exit: Array[[]]
//groups: Array[<5 empty slots>], parents: Array[html]
