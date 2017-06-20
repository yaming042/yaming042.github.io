;(function($){
	var WaterFull = function(ele,opt){
		this.element = ele;
		this.defaults = {
			main:".main",
			item:".item"
		};
		this.options = $.extend(true,this.defaults,opt||{});

		var me = this,
			main = $(me.options.main),
			item = $(me.options.item),
			perItemW = parseInt(item.eq(0).outerWidth()),
			perItemNum = Math.floor(main.width() / perItemW),
			scrollFlag = true,
			rowArr = [],
			//scroll时item的模拟数据，这个后期可以改成ajax调用
			dataArr = [
						{"img":'pic01.jpg',"id":"10","des":"aaaaaaaaaaaa"},
						{"img":'pic02.jpg',"id":"11","des":"aaaaaaaaaaaa"},
						{"img":'pic03.jpg',"id":"12","des":"aaaaaaaaaaaa"},
						{"img":'pic04.jpg',"id":"13","des":"aaaaaaaaaaaa"},
						{"img":'pic05.jpg',"id":"14","des":"aaaaaaaaaaaa"},
						];

		this.initPosition = function(){//初始化item的位置信息，并且设置
			main.find(me.options.item).each(function(index,value){				
				var _H = $(value).outerHeight(),
					pos;
				if(index >= perItemNum){
					var min = me.getMinIndex(rowArr,2),	//高度的最小值的index				
						minH = rowArr[min][2] + _H;

					rowArr[min] = [rowArr[min][2],min*perItemW,minH];
					pos = min;
				}else{
					rowArr[index] = [0,index*perItemW,_H];
					pos = index;
				}
				$(value).css({"position":"absolute","top":rowArr[pos][0]+"px","left":rowArr[pos][1]+"px"});								
			});
			
			var maxH = rowArr[me.getMaxIndex(rowArr,2)][2];
			main.css({"height":maxH+"px","width":perItemW*perItemNum+"px"});
		} 

		this.setPosition = function(arr){
			//scroll后调用的设置item位置的函数
			//若是没增加一个item就调用一次，则调用频率太快，有可能上一个还没加载完成呢
			arr.each(function(index,value){
				var _H = $(value).outerHeight(),
					min = me.getMinIndex(rowArr,2),	//高度的最小值的index				
					minH = rowArr[min][2] + _H,
					pos;

				rowArr[min] = [rowArr[min][2],min*perItemW,minH];
				pos = min;
				$(value).css({"position":"absolute","top":rowArr[pos][0]+"px","left":rowArr[pos][1]+"px"});	
			});
			
			var maxH = rowArr[me.getMaxIndex(rowArr,2)][2];
			main.css("height",maxH+"px");
		}

		this.scrollItem = function(type){//scroll事件函数
			var obj;
			if(!type){
				obj = $(window);
			}else{
				obj = $(type);
			}

			obj.scroll(function(){
				var num = main.find(me.options.item).length;
				if(num <= 40){
					if(scrollFlag){
						setTimeout(function(){
							me.addItem(dataArr);
							scrollFlag = true;
						},300);
						scrollFlag = false;
					}					
				}				
			});
		}

		this.getMinIndex = function(arr,pos){//获取最小值的index，arr要查找的数组，pos要查找的是top值还是left值，还是高度值
			var len = arr.length,
				minH,
				num,
				minIndex = 0;
			switch(pos){
				case 0://top值
					num = 0;
					break;
				case 1://left值
					num = 1;
					break;
				default://高度值
					num = 2;
					break
			}
			minH = rowArr[0][num];
			for(var i=1;i<len;i++){				
				if(minH > rowArr[i][num]){
					minH = rowArr[i][num];
					minIndex = i;
				}
			}
			return minIndex;			
		}
		this.getMaxIndex = function(arr,pos){//获取最大值的index，arr要查找的数组，pos要查找的是top值还是left值，还是高度值
			var len = arr.length,
				maxH,
				num,
				maxIndex = 0;
			switch(pos){
				case 0://top值
					num = 0;
					break;
				case 1://left值
					num = 1;
					break;
				default://高度值
					num = 2;
					break
			}
			maxH = rowArr[0][num];
			for(var i=1;i<len;i++){				
				if(maxH < rowArr[i][num]){
					maxH = rowArr[i][num];
					maxIndex = i;
				}
			}
			return maxIndex;
		}
		this.addItem = function(dataArr){//滚动时的增加item的函数
			var len = dataArr.length,
				cloneNode,
				newArr;

			for(var i=0;i<len;i++){
				cloneNode = item.eq(0).clone(true);
				(function(i){
					cloneNode.find("img").attr("src","/public/img/waterfull/"+dataArr[i].img);
					cloneNode.find("p").eq(0).html(dataArr[i].id);
					cloneNode.find("p").eq(1).html(dataArr[i].des);
					cloneNode.appendTo(main);
				})(i);				
			}
			newArr = main.find(me.options.item).slice(-len);
			me.setPosition(newArr);
		}
		this.canScroll = function(){
			//设置定时器，防止频繁加载（应该加上滚动判断的，根据滚动的临界值判断是否加载）			
		}

		this.resize = function(){
			$(window).resize(function(){
				me.initPosition();//变量是在函数外赋值的，所以每次的值都是固定的，所以就不会重新加载新的数据
			});			
		}
	};

	WaterFull.prototype = {
		init:function(){
			var me = this;
			me.initPosition();

			me.scrollItem();
			me.resize();
		},
	};
	$.fn.test = function(options){
		test = new WaterFull(this,options);
		return test.init();
	}

})(jQuery);