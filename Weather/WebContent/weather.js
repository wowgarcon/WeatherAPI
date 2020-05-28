$(document).ready(function(){
	
	let cityName = $("#cityName_Selector option:selected").val();
	getWeatherInfo(cityName);
	
	//도시 이름 셀렉트박스 선택 이벤트
	$("#cityName_Selector").on("change", function(){
		getWeatherInfo($(this).val());
	});
	
	
	function getWeatherInfo(cityName){
		//openWeatherAPI currentWeatherData
		let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
		url += cityName;	//cityName
		url += '&appid=';
		url += 'your openWeathersAPI appid';	//your openWeathersAPI appid
		
		$.getJSON(url, function(data){
			//data 추출하기
			var $cTemp = data.main.temp + "℃";
			var $minTemp = "최저 " + data.main.temp_min + "℃";
			var $maxTemp = "최고 " + data.main.temp_max + "℃";
	        var humidity = data.main.humidity + "%";
	        var windSpeed = data.wind.speed + "m/s";

	        //현재시간 추출하기
	        var $now = new Date($.now());
	        var month = Number($now.getMonth()) + 1;
	        var day = $now.getDate();
	        var hour = $now.getHours();
	        var minutes = $now.getMinutes();
	          
	        if(month < 10){
	           	month = '0' + month;
	        }
	       	if(day < 10){
	       		day = '0' + day;
	       	}
	       	if(hour < 10){
	       		hour = '0' + hour;
	       	}
	       	if(minutes < 10){
	       		minutes = '0' + minutes;
	       	}
	         
	       	var $cDate = $now.getFullYear() + '.' + month + '.' + day + '<br>' + hour + '시 ' + minutes + '분';
	       	var $wIcon = data.weather[0].icon;
	         
	       	$('#cityName').html(cityName);
	       	$('.cIcon').html("<img src='http://openweathermap.org/img/wn/"+$wIcon+".png' width='80px'/>");
	       	$('.cTemp').html($cTemp);
	       	$('.cLowTemp').html($minTemp + " / " + $maxTemp);
	       	$('.cHumidity').html(humidity);
	       	$('.cWindSpeed').html(windSpeed);
	       	$('.time').html($cDate);
		}); 
	}
	

});

