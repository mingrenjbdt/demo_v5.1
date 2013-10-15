$(function () {
	var data = new Array ();
    var ds = new Array();
	
	data.push ([[2008,25],[2009,34],[2010,37],[2011,45],[2012,56]]);
	data.push ([[2008,13],[2009,29],[2010,25],[2011,23],[2012,31]]);
	data.push ([[2008,8],[2009,13],[2010,19],[2011,15],[2012,14]]);
	data.push ([[2008,20],[2009,43],[2010,29],[2011,23],[2012,25]]);
 
    for (var i=0, j=data.length; i<j; i++) {
    	
	     ds.push({
	        data:data[i],
	        grid:{
            hoverable:true
        },
	        bars: {
	            show: true, 
	            barWidth: 0.2, 
	            order: 1,
	            lineWidth: 0.5, 
				fillColor: { colors: [ { opacity: 0.65 }, { opacity: 1 } ] }
	        }
	    });
	}
	    
    $.plot($("#bar-chart"), ds, {
    	colors: ["#F90", "#222", "#666", "#BBB"]
                

    });
                

    
});