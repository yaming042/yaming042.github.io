hexo.extend.helper.register('getThumb', function(content){
    let reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim,
        result = []; 
    while( temp = reg.exec(content) ){ 
        result.push(temp[2]); 
    } 

    return result;
});

hexo.extend.helper.register('clearHtml', function(str){
    let reg=/<\/?.+?\/?>/g;

    return str.replace(reg, '');
});

hexo.extend.helper.register('getExcerpt', function(content, length){
    let reg=/<\/?.+?\/?>/g;

    return content.replace(reg, '').substr(0, length);
});