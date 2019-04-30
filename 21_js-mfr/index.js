d3.json('https://data.cityofnewyork.us/resource/ihfw-zy9j.json').then(function(data){
    demographics = data;
    average(demographics);
    median(demographics);
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
    var list = list.reduce(function(t, c, i){
	if(i == t.length -1){return t[t.length/2];}
	for(var j = 0; j < i; j ++){
	    if(t[j] >= c && t[j+1] <= c){
		
	    }
	}
	return r;
    });
    console.log(list);
    med = list[list.length/2];
    console.log(med);
}
