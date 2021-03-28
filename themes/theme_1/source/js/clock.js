(function(){
	//canvas的宽高
	var canvasW = 280,
	canvasH = 90;
	//原型半径
	var Radius = 2;
	//canvas的内边距
	var canvasPT = 20,
	canvasPL = 10;
	// 每个小球正方形的内边距值
	var ballP = 0.5;

	// 周几，用来改变每天时钟的渲染颜色
	var day = 0;

	//获取canvas
	var canvas = document.getElementById("canvas"),
	ext = canvas.getContext('2d');

	//设置canvas宽高
	canvas.width = canvasW;
	canvas.height = canvasH;
	//全局的时间变量
	var initTime = getTime(),
	Balls = [],
	Colors = ['#FFFF00','#cb2ccb','#3D3D3D','#9A32CD','#919191','#7CFC00','#388E8E','#FF7256','#BFEFFF','#ADFF2F'];
	//渲染画布

	var t = setInterval(function(){
	render(ext);
	update();
	},50);

	function render(ext){
	// 清除画布
	ext.clearRect(0,0,ext.canvas.width,ext.canvas.height);
	// 每个数字x轴坐标的步长
	var leftVal = -(7*(Radius + ballP)*2 + 14);
	//将时间数输入数组，其中10为冒号
	var data = getTime();
	//循环渲染数字
	for(var i=0;i<data.length;i++){				
		if(i != 0 && i%3 == 0){
			leftVal += 4*(Radius + ballP)*2;
		}else{
			leftVal += 8*(Radius + ballP)*2;
		}
		renderDigit(canvasPL+leftVal,canvasPT,data[i],Radius,ext);
	}
	//绘制要动画的小球
	renderBall(Balls,ext);
	}
	function update(){
	var time = getTime();			
	var leftVal = -(7*(Radius + ballP)*2 + 14);
	//比较时间的变化值
	// var a = time.map(function(value,index){
	// 	if(value != initTime[index]){//不一样的数字，这是需要描绘的
	// 		if(index != 0 && index%3 == 0){
	// 			leftVal += 4*(Radius + 1)*2;
	// 		}else{
	// 			leftVal += 8*(Radius + 1)*2;
	// 		}
	// 		addBall(canvasPL+leftVal,canvasPT,value);//增加小球					
	// 	}
	// });
	for(var i=0;i<time.length;i++){
		if(i != 0 && i%3 == 0){
			leftVal += 4*(Radius + ballP)*2;
		}else{
			leftVal += 8*(Radius + ballP)*2;
		}
		if(time[i] != initTime[i]){
			addBall(canvasPL+leftVal,canvasPT,time[i]);//增加小球
		}
	}

	initTime = time.slice(0);
	updateBall(ext);//更新小球
	}
	//增加小球
	function addBall(x,y,num){
	for(var i=0;i<digit[num].length;i++){//i相当于y
		for(var j=0;j<digit[num][i].length;j++){//j相当于x
			var oneBall = {
				x: x + 2*j*(Radius + ballP) + (Radius + ballP),//坐标信息
				y: y + 2*i*(Radius + ballP) + (Radius + ballP),//坐标信息
				vx: Math.pow(-1,getRandom(0,10))*getRandom(1,3),
				vy: -4 + getRandom(0,4),
				g: 1.8 + getRandom(1,2),
				color: Colors[getRandom(0,Colors.length)]
			};
			Balls.push(oneBall);
		}
	}
	}
	//更新小球
	function updateBall(ext){
	var len = 0;
	for(var i=0;i<Balls.length;i++){
		Balls[i].x += Balls[i].vx;
		Balls[i].y += Balls[i].vy;
		Balls[i].vy += Balls[i].g;

		if(Balls[i].y >= ext.canvas.height - Radius){
			Balls[i].y = ext.canvas.height - Radius;
			Balls[i].vy = -Balls[i].vy*0.6;
		}

		// 边界判断，删除较早的小球
		if(Balls[i].x > Radius && Balls[i].x < ext.canvas.width){
			Balls[len++] = Balls[i];
		}				
	}
	while(Balls.length > Math.min(700,len)){
		Balls.shift();
	}
	}

	//渲染单独的一个数字
	function renderDigit(x,y,num,radius,ext){
	var centerX,
		centerY;
	ext.fillStyle = Colors[day];

	for(var i=0;i<digit[num].length;i++){//i相当于y
		for(var j=0;j<digit[num][i].length;j++){//j相当于x
			centerX = x + 2*j*(radius + ballP) + (radius + ballP);
			centerY = y + 2*i*(radius + ballP) + (radius + ballP);
			if(digit[num][i][j]){
				ext.beginPath();
				ext.arc(centerX,centerY,radius,0,2*Math.PI);
				ext.closePath();
				ext.fill();
			}
		}
	}			
	}
	//渲染要动画的小球
	function renderBall(balls,ext){
	var len = balls.length;
	for(var i=0;i<len;i++){
		ext.fillStyle = balls[i].color;
		ext.beginPath();
		ext.arc(balls[i].x,balls[i].y,Radius,0,2*Math.PI);
		ext.closePath();
		ext.fill();
	}
	}
	//时间处理函数
	function getTime(){
	var date = new Date(),
		h = date.getHours(),
		m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
		s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

	day = date.getDay();

	var timeArr = [parseInt(h/10),h%10,10,parseInt(m/10),m%10,10,parseInt(s/10),s%10];
	return timeArr;
	}
	//获取范围随机数
	function getRandom(n,m){
	var c = m - n + 1;  
	return Math.floor(Math.random() * c + n);
	}
})();