(function(){
    AV.init({
        appId: window.APP_ID,
        appKey: window.APP_KEY
    });
    // 显示次数
    function showTime(Counter) {
        var query = new AV.Query("Counter");

        if( window.IS_POST ){
            if($(".leancloud_visitors").length > 0){
                var url = $(".leancloud_visitors").attr('id').trim();

                query.equalTo("words", url).count().then(function (number) {
                    $(document.getElementById(url)).text( number ? number : '--' );
                }, function (error) {});
            }
        }else{
            query.select(['words']).count().then(function(number){
                $('.visitor_area').css('display', 'inline');
                $('#visit_count').text( number || '--' );
            }, function (error) {});
        }
    }
    // 追加pv
    function addCount(Counter) {
        var url = $(".leancloud_visitors").length > 0 ? $(".leancloud_visitors").attr('id').trim() : window.location.href;
        var Counter = AV.Object.extend("Counter");
        var query = new Counter;
        query.save({
            words: url
        }).then(function (object) {

        });
    }
    function renderVisitor(Counter){
        var query = new AV.Query("Counter"),
            visitors = {};

        query.select(['words']).each(function(v,i){
            var words = v.attributes['words'];
            
            if( visitors.hasOwnProperty(words) ){
                visitors[words]++;
            }else{
                visitors[words] = 1;
            }
        });
        
        var t = setTimeout(function(){
            clearTimeout( t );
            $('.visitor').each(function( index, item ){
                var url = $(item).attr('id'),
                    number = visitors[url];
                
                $(document.getElementById(url)).text( number ? number : '--' );
            });
        }, 1000);

    }

    var Counter = AV.Object.extend("Counter");
    if( location.host.indexOf('localhost') == -1 ){
        addCount(Counter);
        showTime(Counter);
        renderVisitor(Counter);
    }
})();