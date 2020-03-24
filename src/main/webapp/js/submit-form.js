//判断是pc还是移动的方法
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
       "SymbianOS", "Windows Phone",
       "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
       if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
       }
    }
    return flag;
 }
 var ip=returnCitySN.cip;

//获取当前文档的Url
var URL = document.URL;

$(document).ready(function(){
    $("#applyform").Validform({   //指定$("#applyform") 哪一个2表单需要进行验证
        showAllError:false,       //可选项 true | false，true：提交表单时所有错误提示信息都会显示，false：一碰到验证不通过的就停止检测后面的元素，只显示该元素的错误信息;
        postonce:true,   
        tiptype:function(msg,o,cssctl){
            if(o.type == 3) {
                layer.msg(''+msg);  //弹出框显示
            }
        },
        callback:function(data){
            layer.msg('留言已经提交成功,请您耐心等待');
        }
    });
});
//判断是pc 还是移动重新给input赋值
if(IsPC()){
    $("#applyform_hasComputer").attr("value","1");
}else{
    $("#applyform_hasComputer").attr("value","0");
}   

$("#applyform_ip").attr("value",ip);

$("#applyform_url").attr("value",URL);



    // 底部弹出框留言
$(document).ready(function(){
	$("#applyform3").Validform({
        showAllError:false,
        postonce:true,               //可选项 表单是否只能提交一次，true开启，不填则默认关闭;
		tiptype:function(msg,o,cssctl){
			if(o.type == 3) {
				layer.msg(msg);
            }         
        },
        callback:function(data){
            layer.msg('留言已经提交成功,请您耐心等待');
        }
    });
});
    
if(IsPC()){
    $("#applyform3_hasComputer").attr("value","1");
}else{
    $("#applyform3_hasComputer").attr("value","0");
}   

$("#applyform3_ip").attr("value",ip);

$("#applyform3_url").attr("value",URL);







$(document).ready(function(){
	$("#applyform2").Validform({
		showAllError:false,
        postonce:true,  
		tiptype:function(msg,o,cssctl){
			if(o.type == 3) {
				layer.msg(msg);
			}
		},
    callback:function(data){
        layer.msg('留言已经提交成功,请您耐心等待');
        }
	});
});

if(IsPC()){
    $("#applyform2_hasComputer").attr("value","1");
}else{
    $("#applyform2_hasComputer").attr("value","0");
}   

$("#applyform2_ip").attr("value",ip);

$("#applyform2_url").attr("value",URL);