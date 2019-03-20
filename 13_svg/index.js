//set element size
var width = 420,
    barHeight = 20;

//calculates height of bar
//V3 uses scale.linear()
var x = d3.scaleLinear()
    .range([0, width]);

//sets width attribute of the chart
var chart = d3.select(".chart")
    .attr("width", width);

//using data from tsv file
//V3 uses d3.tsv("data.tsv", type, function(error, data) {
d3.tsv("data.tsv", type).then(function(data) {
    x.domain([0, d3.max(data, function(d) { return d.value; })]);

    chart.attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    //appended elements inherits the parent data
    bar.append("rect")
	.attr("width", function(d) { return x(d.value); })
	.attr("height", barHeight - 1);

    bar.append("text")
	.attr("x", function(d) { return x(d.value) - 3; })
	.attr("y", barHeight / 2)
	.attr("dy", ".35em")
	.text(function(d) { return d.value; });
});

//turns input values into a number
function type(d) {
    d.value = +d.value; // coerce to number
    return d;
}
