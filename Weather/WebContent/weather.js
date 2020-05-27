$(document).ready(function(){
	
	const url = 'https://api.openweathermap.org/data/2.5/weather?id=1819729&appid=5c818fece92856e67c360f488be116cc&units=metric';
	
//	const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&id=';
//	url += '1000000';		//your openWeathersAPI Id
//	url += '&appid=';
//	url += 'adhfiuqknhi100dash8y328k3djfh';			//your openWeathersAPI appid
	
	$.getJSON(url, function(data){
		//data 추출하기
		alert('');
		var $cTemp = data.main.temp + "℃";
		var $minTemp = "최저 " + data.main.temp_min + "℃";
		var $maxTemp = "최고 " + data.main.temp_max + "℃";
        var humidity = data.main.humidity + "%";
        var windSpeed = data.wind.speed + "m/s";

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
         
       	$('.cIcon').append("<img src='http://openweathermap.org/img/wn/"+$wIcon+".png' width='80px'/>");
       	$('.cTemp').append($cTemp);
       	$('.cLowTemp').append($minTemp + " / " + $maxTemp);
       	$('.cHumidity').append(humidity);
       	$('.cWindSpeed').append(windSpeed);
       	$('.time').append($cDate);
	}); 

});

