<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!--=====================================jquery=========================================-->

	<script src="https://code.jquery.com/jquery-3.4.1.min.js"
		integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
		crossorigin="anonymous"></script>

<!--===================================bootstrap========================================-->
	
	<link rel="stylesheet"
		href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
		integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
		crossorigin="anonymous">
	
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
		integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
		crossorigin="anonymous"></script>

<!--====================================================================================-->

	<script src="weather.js"></script>

</head>
<body>

	<br>
	<h2 class="text-center">나라 이름</h2>
	<br>
	<div class="d-flex flex-wrap shadow text-center justify-content-center align-items-center">
		<div class="flex-fill p-2 d-flex justify-content-center align-items-center">
			<span class="cIcon">
				<!-- 날씨 아이콘 들어감 -->
			</span>
			<span class="time">
				<!-- 날짜, 시간 들어감 -->
			</span>
		</div>
		<div class="flex-fill p-2 align-items-center">
			<h6>현재</h6>
			<h4 class="cTemp">
				<!-- 현재 온도 들어감 -->
			</h4>
			<span class="cLowTemp">
				<!-- 최저/최고 온도 들어감 -->
			</span>
		</div>
		<div class="flex-fill p-2">
			<h6>습도</h6>
			<h4 class="cHumidity">
				<!-- 현재 습도 들어감 -->
			</h4>
		</div>
		<div class="flex-fill p-2">
			<h6>풍속</h6>
			<h4 class="cWindSpeed">
				<!-- 현재 풍속 들어감 -->
			</h4>
		</div>
	</div>

	<select>
		<option></option>
		<option></option>
		<option></option>
		<option></option>
	</select>
</body>
</html>