---
layout: page
title: js常用算法测试
permalink: /fe/jq/
---

<div class="alert alert-warning" role="alert">
<link rel="stylesheet" href="{{ site.baseurl }}/public/css/sort.css" />
<!--1.随机生成乱序数据-->
	<div class="">
		<input type="text" id="creatData" value="" placeholder="数组最大值">
		<input type="text" id="countData" value="" placeholder="数组长度">
		<input type="button" class="default" value="生成数据">
		<label for="beforeValue">待排序数据</label>
		<input type="text" id="testValue" value="">

	</div>

	<div class="btn-zone">
		<button id="sort1">冒泡排序</button>
		<button id="sort2">选择排序</button>
		<button id="sort3">插入排序</button>
		<button id="sort4" disabled="disabled">希尔排序</button>
		<button id="sort5" disabled="disabled">归并排序</button>
		<button id="sort6" disabled="disabled">快递排序</button>
		<button id="sort7" disabled="disabled">堆排序</button>
		<button id="sort8" disabled="disabled">计数排序</button>
		<button id="sort9" disabled="disabled">桶排序</button>
		<button id="sort10" disabled="disabled">基数排序</button>
	</div>
	<hr>
	<div class="time-zone"></div>
	<hr>
	<div class="list-zone">	</div>

	<script type="text/javascript">
		var Time = 0,
			lenTime,
			afterArr;
		var dataArr = new Array();
		
		//获取随机数
		function getRandom(n,m){
	        var c = m - n + 1;  
	        return Math.floor(Math.random() * c + n);
	    }

		function creatData(){
			var rang = $("#creatData").val();
			var count = $("#countData").val();
			var isNumber = /^\+?[1-9][0-9]*$/;
			var data = "",temp;

			if(isNumber.test(rang) && isNumber.test(count)){
				for(var i=0;i<count;i++){
					if(i >= count-1){
						temp = getRandom(0,rang)
					}else{
						temp = getRandom(0,rang) + ',';
					}					
					data += temp;
				}
			}
			return data;
		}

		function rendArr(){
			$(".default").on("click",function(){
				$("#testValue").val(creatData());
			});
		}

		function cacuTime(type,arr){
			var start,end;
			switch (type){
				case '1':
					start = new Date().getTime();
					afterArr = sortByBubble(arr);
					end = new Date().getTime();
					break;
				case '2':
					start = new Date().getTime();
					afterArr = sortBySelect(arr);
					end = new Date().getTime();
					break;
				case '3':
					start = new Date().getTime();
					afterArr = insertSort(arr);
					end = new Date().getTime();
					break;
				default:
					//...
			}
			dataArr.push(afterArr,end-start);
		}

		function renderList(type){
			var html = '<div class="afterSort type'+type+'"><p class="item">排序类型：<span>'+dataArr[0]+'</span></p><p class="item">数组：<span>'+dataArr[1]+'</span></p><p class="item">排序时间：<span>'+dataArr[2]+'ms</span></p></div><hr />';

			var timeHtml = '<span id="s'+type+'" data-attr="'+dataArr[0]+'">'+dataArr[2]+'ms</span>';

			$(timeHtml).appendTo($('.time-zone'));
			$(html).appendTo($('.list-zone'));
			dataArr.splice(0,dataArr.length);

			timeZhover();
		}

		function beginSort(){
			var data, testArr;
			$(".btn-zone button").hover(function(){
				data = $("#testValue").val();
				testArr = data.split(",");
			});

			$(".btn-zone button").on("click",function(){
				dataArr.push($(this).text());
				var sortType = $(this).attr("id").substring(4);

				if($(".afterSort").hasClass('type'+sortType)){					
					return ;
				}
				var len = testArr.length;
				for(var i=0;i<len;i++){
					testArr[i] = Number(testArr[i]);
				}

				cacuTime(sortType,testArr);
				renderList(sortType);
			});
		}
 

		function timeZhover(){
			$(".time-zone span").hover(function(){
				console.log("hover");
				var me = $(this),
					typeId = me.attr("id").substring(1),
					name = $("#sort"+typeId).text();
				me.addClass("showTip");
			},function(){
				$(this).removeClass("showTip");
			});
		}

		$(window).ready(function(){
			rendArr();
			beginSort();
		});

		//冒泡排序
		function sortByBubble(arr){
			var len = arr.length;
			var temp;
			for(var i=0;i<len-1;i++){
				for(var j=0;j<len-1-i;j++){
					if(arr[j+1] > arr[j]){
						temp = arr[j+1];
						arr[j+1] = arr[j];
						arr[j] = temp;
					}
				}
			}
			return arr;
		}
		//选择排序
		function sortBySelect(arr){
			var len = arr.length,
				temp,
				maxIndex;
			for(var i=0;i<len-1;i++){
				maxIndex = i;
				for(var j=i;j<len;j++){
					if(arr[maxIndex] < arr[j+1]){
						maxIndex = j + 1;
					}
				}
				temp = arr[i];
				arr[i] = arr[maxIndex];
				arr[maxIndex] = temp;
			}
			return arr;
		}
		// 插入排序
		function insertSort(arr){
			var len = arr.length;
			var prevIndex,curVal;
			for(var i=1;i<len;i++){
				prevIndex = i - 1;
				curVal = arr[i];
				while(prevIndex >= 0 && arr[prevIndex] > curVal){
					arr[prevIndex + 1] = arr[prevIndex];
					prevIndex--;
				}
				arr[prevIndex + 1] = curVal;
			}
			return arr;
		}
	</script>
</div>
