(function($){
	
	var Carousel = (function(){
		function Carousel(element,options){
			this.settings = $.extend(true, $.fn.Carousel.defaults, options||{});
			this.element = element;
			this.init();
		}
		Carousel.prototype = {
			init:function(){
				var me = this;
				me.page = me.settings.page;
				me.list = me.settings.list;
				me.listitem = me.settings.listitem;
				me.buttons = me.settings.button;
				me.prev = me.settings.prev;
				me.next = me.settings.next;
				me.index = me.settings.index;
				me.duration = me.settings.duration;
				me.time = me.settings.interval;
				me.autoplay = me.settings.autoplay;	

				me.listCount = $(me.list).find(me.listitem).length;
				me.cellWidth = $(me.element).width();
				console.log($(me.element).width()+"|width");
				me.timer;

				me._initList();				
				
				if(me.page){
					me.showPage();
					me.buttonsEvent();
				}
				me._prev();
				me._next();
				if(me.autoplay){
					me.autoPlay();
					me.hoverEvent();
				}
			},
			_initList:function () {
				var me = this;
				var width = me.cellWidth*(me.listCount+2);
				console.log(width+"|aaaaaaa");
				var styleobj =  {liststyle:{
									'width':width,
									'height':'100%',
									'z-index': 1,
									'left': '-'+me.cellWidth+'px',
									'position':'relative'
								},
							    itemstyle:{
									'float':'left',
									'width':(100/(me.listCount+2)).toFixed(2)+'%',
									'height':'100%'
								}};
				$(me.list).css(styleobj.liststyle);
				$(me.list).find(me.listitem).css(styleobj.itemstyle);

				var firstNode = $(me.list+" "+me.listitem).eq(0).clone(true);
				var lastNode = $(me.list+" "+me.listitem).eq(me.listCount-1).clone(true);
				$(me.list).prepend(lastNode);
				$(me.list).append(firstNode);

				console.log(me.cellWidth);
			},
			showPage:function(){
				var me = this;
				var html = "<div id='buttons' style='"+''+"'>";

				for(var i=1,j=me.listCount;i<=j;i++){
					if(i == me.index){
						html += "<span index='"+i+"' class='on'></span>";
					}else{
						html += "<span index='"+i+"'></span>";						
					}
				}
				html += "</div>";
				me.element.append(html);

			},		
			showButton:function(){
				var me = this;
				$("#buttons span").eq(me.index-1).addClass("on").siblings().removeClass("on");
			},	
			moveTo:function(direction,step){
				var me = this,offset;

				if(!step){
					offset = 1;
				}else{
					offset = step;
				}
				

				var left = parseInt($(me.list).css("left")) + me.cellWidth*direction*offset;//用来判断是否到第一，或最后一个
				
				$(me.list).animate({"left":left},me.duration,function(){
					if(left < me.cellWidth*me.listCount*direction && direction < 0){
						$(this).css("left",me.cellWidth*direction);
					}
					if(left > me.cellWidth*(-1)/2 && direction > 0){
						$(this).css("left",me.cellWidth*me.listCount*(-1));
					}
				});
				
				me.showButton();
			},
			_next:function(){
				var me = this;
				$(me.next).on("click",function(){
					if($(me.list).is(":animated")){
						return;
					}
					if(me.index == me.listCount){
						me.index = 1;
					}else{
						me.index += 1;
					}

					me.moveTo(-1);
				});				
			},
			_prev:function(){
				var me = this;
				$(me.prev).on("click",function(){
					if($(me.list).is(":animated")){
						return;
					}
					if(me.index == 1){
						me.index = me.listCount;
					}else{
						me.index -= 1;
					}

					me.moveTo(1);
				});		
			},
			buttonsEvent:function(){
				var me = this,
					direction,currentIndex,step;

				$("#buttons span").each(function(){
					$(this).on("click",function(){

						if($(this).hasClass("on") || $(me.list).is(":animated")){
							return;
						}
						currentIndex = parseInt($(this).attr("index"));
						step = Math.abs(currentIndex - me.index);
						if(currentIndex > me.index){
							direction = -1;
						}else{
							direction = 1;
						}
						me.index = currentIndex;
						me.moveTo(direction,step);
						
					});
				});
			},
			autoPlay:function() {
				var me = this;
				me.timer = setInterval(function(){					
					$(me.next).trigger("click");
				},me.time);
			},
			// stopPlay:function(){
			// 	var me = this;
			// 	clearTimeout(me.timer);
			// },
			hoverEvent:function(){
				var me = this;
				$(me.element).hover(function(){
					clearInterval(me.timer);
				},function(){
					me.timer = setInterval(function(){
						$(me.next).trigger("click");
					},me.time);
				});
			},
		};
		return Carousel;
	})();
	
	$.fn.Carousel = function(options){
		return this.each(function(){
			var me = $(this),
				instance = me.data("Carousel");

			if(!instance){
				me.data("Carousel", (instance = new Carousel(me, options)));
			}
		});
	}
	$.fn.Carousel.defaults = {
		page:true,
		list:"#list",
		prev:"#prev",
		next:"#next",
		index:1,
		duration: 1000,
		interval:5000,
		autoplay:true,
		listitem:"img"
	}
	
})(jQuery);