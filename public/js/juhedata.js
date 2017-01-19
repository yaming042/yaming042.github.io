$(function(){
	getNews.getNewsList();
});

window.getNews = function(){
	var url = "http://yaming.site/juhedata/data.php";

	function renderNews(data){
		var len = data.length,
			pos = (len < 4 ? len : 4);
		var html,url,img,title;
		for(var i=0;i<pos;i++){
			img = data[i].thumbnail_pic_s;
			url = data[i].url;
			title = data[i].title;
			html = '<div class="news-item"><a href="'+url+'"><img src="'+img+'" alt=""></a><p><a href="'+url+'">'+title+'</a></p></div>';
		}
		$(html).appendTo("#news-box");
	}

	return {
		getNewsList: function(){
			$.ajax({
				url: newsUrl,
				type: 'GET',
				cache: true,
				dataType: 'json',
				success:function(data){
					var objArr = data.result.data;
					renderNews(objArr);
					console.log(data);
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					console.log('textStatus:'+textStatus+",errorThrown:"+errorThrown);
				}
			});
		},
	};
}();