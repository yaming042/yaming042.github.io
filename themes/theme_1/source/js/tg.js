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
                    $(document.getElementById(url)).text( typeof (number || 0) === 'number' ? number+1 : '1' );
                }, function (error) {});
            }
        }else{
            query.select(['words']).count().then(function(number){
                $('.visitor_area').css('display', 'inline');
                $('#visit_count').text( number || '1' );
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
        let query = new AV.Query("Counter"),
            visitors = {};

        query.select(['words']).count().then(function(number){
            let count = 0;

            query.select(['words']).each(function(item, index){
                let words = item.attributes['words'];
                count++;

                if( visitors.hasOwnProperty(words) ){
                    visitors[words]++;
                }else{
                    visitors[words] = 1;
                }

                // 循环完毕
                if( count == number ){
                    $('.visitor').each(function( index, item ){
                        let url = $(item).attr('id'),
                            num = visitors[url];
                    
                        $(document.getElementById(url)).text( num ? num : '1' );
                    });
                }
            });


        }, function (error) {});
    
    }

    var Counter = AV.Object.extend("Counter");
    if( location.host.indexOf('localhost') == -1 ){
        addCount(Counter);
    }

    showTime(Counter);
    renderVisitor(Counter);
})();