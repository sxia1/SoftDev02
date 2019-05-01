d3.json('https://data.cityofnewyork.us/resource/ihfw-zy9j.json').then(function(data){
    average(data);
    median(data);
});

function average(dem, type){
    var list = [];
    for(var i = 0; i < dem.length; i ++){
	list.push(parseFloat(dem[i].asian_per));
    }
    console.log(list);
    var avg = list.reduce(function(t, c, i){
	if(i == list.length -1){return t/list.length;}
	return t + c;
    });
    console.log(avg);
};

function median(dem){
    var list = [];
    for(var i = 0; i < dem.length; i ++){
	list.push(parseFloat(dem[i].asian_per));
    }
    //quickselect
    list.sort(function(a, b){
	return a -b
    });
    console.log(list);
    med = list[list.length/2];
    console.log(med);
}
