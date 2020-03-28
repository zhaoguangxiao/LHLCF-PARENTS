
function getTime(value) {
    date = new Date(value);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var m1 = date.getMinutes();
        var s = date.getSeconds();
        m = m < 10 ? ("0" + m) : m;
        d = d < 10 ? ("0" + d) : d;
        h = h < 10 ? ("0" + h) : h;
        m1 = m1 < 10 ? ("0" + m1) : m1;
        return y + "-" + m + "-" + d + " "
                + h + ":" + m1 ;
}




$.ajax({
url:'https://manage.zhou-yuanwai.com/journalism/findalllhlcf.do',  // ajax请求要请求的地址
    type:"get", // 请求的类型  get  post
    success:function (data) {
    // 请求成功之后要执行的方法
    // data  接收请求成功之后的返回值
    //循环数据到页面上
    var orderBody = '';
    $.each(data, function (index, val) {
        orderBody += '<li><a href="newsinfo.html?uidpk='+val.uidpk+'">' +
                            '<p>'+val.title+'</p>'+
                            '<font>'+getTime(val.createTime)+'</font></a></li>'
                   
    })
$('#news_list').append(orderBody);
},
    error:function (error) {
    // 请求失败之后要执行的内容
    }
})   