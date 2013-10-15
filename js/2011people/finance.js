// JavaScript Document
// JavaScript Document
//杩斿洖涓€涓猘jax璇锋眰瀵硅薄锛屼緵浣跨敤ajax鏃朵娇鐢�
function AjaxObject(){
	var  httpRequest;
	if (window.XMLHttpRequest) {
		httpRequest = new XMLHttpRequest();

	}
	else if (window.ActiveXObject) {
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");

	}
	return httpRequest;
}

function showdata( j ) {
	if(j == undefined)
		j = "";
	var catname = document.getElementById('current_cat').value;
	var selected = 0;
	var boxs = document.getElementsByName('box');
	for( var b = 0; b < boxs.length; b++ )
		if( boxs.item(b).checked )
		{
			selected += "," + boxs.item(b).value;
		}
		//alert( selected );

	var beginyear = document.getElementById('beginyear').value;
	var beginmonth = document.getElementById('beginmonth').value;
	var endyear = document.getElementById('endyear').value;
	var endmonth = document.getElementById('endmonth').value;

	var xmlObj = new AjaxObject();
	xmlObj.onreadystatechange = function() {
		if (xmlObj.readyState == 4) {
			if (xmlObj.status == 200) {
				var tmp = xmlObj.responseText;
				//alert( tmp );
				if( tmp && tmp != "f" )
				{
					//alert( "flash.php?ofc=data/"+tmp );
					var rand = Math.random();
					document.getElementById('div_iframe').innerHTML = "<iframe id=\"frame_chart\" src=\"flash"+j+".php?rand="+rand+"&ofc=data/"+tmp+"\" width=\"801\" height=\"330\" scrolling=\"no\" frameborder=\"0\"></iframe>";
				}
				else
					alert( "鎮ㄩ€夋嫨鐨勬潯浠舵病鏈夊彲鏄剧ず鐨勬暟鎹�,璇烽噸鏂伴€夋嫨" );
			}
		}
	}

	var postData = "indexes=" + selected + "&catname=" + catname + "&beginyear=" + beginyear + "&beginmonth=" + beginmonth + "&endyear=" + endyear + "&endmonth=" + endmonth;

	xmlObj.open("POST","makedatafile.php",true);
	xmlObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8;');
	xmlObj.send(postData);
}

function showyeardata( j ) {
	if(j == undefined)
		j = "";
	var catname = document.getElementById('current_cat').value;
	var selected = 0;
	var boxs = document.getElementsByName('box');
	for( var b = 0; b < boxs.length; b++ )
		if( boxs.item(b).checked )
		{
			selected += "," + boxs.item(b).value;
		}
		//alert( selected );

	var beginyear = document.getElementById('beginyear').value;
	var endyear = document.getElementById('endyear').value;

	var xmlObj = new AjaxObject();
	xmlObj.onreadystatechange = function() {
		if (xmlObj.readyState == 4) {
			if (xmlObj.status == 200) {
				var tmp = xmlObj.responseText;
				//alert( tmp );
				if( tmp && tmp != "f" )
				{
					//alert( "flash.php?ofc=data/"+tmp );
					var rand = Math.random();
					document.getElementById('div_iframe').innerHTML = "<iframe id=\"frame_chart\" src=\"flash"+j+".php?rand="+rand+"&ofc=data/year/"+tmp+"\" width=\"801\" height=\"330\" scrolling=\"no\" frameborder=\"0\"></iframe>";
				}
				else
					alert( "鎮ㄩ€夋嫨鐨勬潯浠舵病鏈夊彲鏄剧ず鐨勬暟鎹�,璇烽噸鏂伴€夋嫨" );
			}
		}
	}

	var postData = "indexes=" + selected + "&catname=" + catname + "&beginyear=" + beginyear +  "&endyear=" + endyear;

	xmlObj.open("POST","makeyeardatafile.php",true);
	xmlObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8;');
	xmlObj.send(postData);
}

function contrast( ) {
	var catname = document.getElementById('current_cat').value;
	var selected = 0;
	var i1 = document.getElementById('indicatrix_1').value;
	var i2 = document.getElementById('indicatrix_2').value;
	
	if( i1 == "" || i2 == "" )
		return;
	else
		selected = String(i1) + "," + String(i2);
		//alert( selected );

	var xmlObj = new AjaxObject();
	xmlObj.onreadystatechange = function() {
		if (xmlObj.readyState == 4) {
			if (xmlObj.status == 200) {
				var tmp = xmlObj.responseText;
				//alert( tmp );
				if( tmp && tmp != "f" )
				{
					//alert( "flash.php?ofc=data/"+tmp );
					var rand = Math.random();
					document.getElementById('div_iframe').innerHTML = "<iframe id=\"frame_chart\" src=\"flash.php?rand="+rand+"&ofc=data/"+tmp+"\" width=\"801\" height=\"386\" scrolling=\"no\" frameborder=\"0\"></iframe>";
				}
				else
					alert( "鎮ㄩ€夋嫨鐨勬潯浠舵病鏈夊彲鏄剧ず鐨勬暟鎹�,璇烽噸鏂伴€夋嫨" );
			}
		}
	}

	var postData = "indexes=" + selected + "&catname=";

	xmlObj.open("POST","makedatafile.php",true);
	xmlObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8;');
	xmlObj.send(postData);
}

//function $(id)
//{
//	return document.getElementById(id);
//}
