function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

var uidpk=getQueryVariable("uidpk")

var url="https://manage.zhou-yuanwai.com/journalism/findOne.do?uidpk="+uidpk

if(uidpk){
    $.get(url,function(data,status){
    if(status === 'success'){
        //给文章标题赋值
        $('#news_title').html(data.title)
        //给文章内容赋值
        $('#news_context').html(data.details)
        $('#news_source').html(data.source)
        $('#news_pageView').html(data.pageView)
    }

});
}