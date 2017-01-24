/*!
 * 可可西移动端项目
 * 2016.9.12 
 * duguangyan
 *
 */
//移动端适应屏幕
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 6.4  + 'px';
        // 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px';
    }, false);
})();
//弹窗插件
;(function ($) {
    $.fn.extend({
        d_alt: function (options) {      //d_alt名称   调用方法 $(obj).d_alt();
            var defaults = {
                title: "弹窗标题",         //弹窗内容
                content: "这是弹窗的内容", //弹窗内容
                speed: 500 ,           //弹窗速度
                callback:function(){}  //确定按钮后回调函数
            };
            var opt = $.extend(defaults, options);
            var fbox,box,title,cont,btn,callback;
            function ddd(){
            	fbox = $("<div class='fbox' style='font-family: 微软雅黑; opacity: 0; width: 100%;height: 100%; position: fixed;top: 0;left: 0;z-index: 9;background-color: #555555;'></div>");
            	box = $("<div style=' width: 5rem; height: 2.4rem;border-radius:0.1rem; opacity: 0; background-color: #FFFFFF; position: fixed;top: 40%; left: 50%;  margin-left: -2.5rem; z-index: 99;'></div>")
            	title = $("<h3 style='width:3rem; margin:  0 auto; text-align: center; font-weight: 100; color: #000000; border-bottom: 1px solid #555555;line-height: 0.6rem;font-size: 0.26rem; '>"+opt.title+"</h3>");
            	cont =$("<p style=' width: 100%; text-align: center; line-height: 0.5rem;font-size: 0.2rem;font-weight: 100; color: #555555; '>"+opt.content+"</p>");
            	btn =$("<a class='btnl'>取消</a><a class='btnr'>确认</a>")
            	btn.css({"display":"inline-block","width":"1.6rem","text-align":"center", "line-height": "0.52rem","height":"0.5rem","border-radius":"0.1rem","border":"1px solid #555555","font-size":"0.2rem"});
            	$("body").append(fbox).append(box);
            	box.append(title).append(cont).append(btn);
            	$(".btnl").css({"float":"left","margin-left":"0.5rem","cursor":"pointer"});
            	$(".btnr").css({"float":"right","cursor":"pointer","margin-right":"0.5rem","border":"1px solid #ff0000","background-color":"#ff0000","color":"#ffffff"});
            	
            	fbox.css({"opacity":"0","display":"block"}).animate({"opacity":"0.8"},opt.speed);
            	box.css({"opacity":"0","top":"100%","display":"block"}).animate({"opacity":"1","top":"30%"},opt.speed);
            };    
            $(this).click(function(){
            	if($("body").children(".fbox").length == 0){
            		ddd();
            	}else{
            		fbox.css({"opacity":"0","display":"block"}).animate({"opacity":"0.8"},opt.speed);
            		box.css({"opacity":"0","top":"100%","display":"block"}).animate({"opacity":"1","top":"30%"},opt.speed);
            	}
	        });    
        	$(document).on("click",".btnl",function(){
        		animateOut();
        	});
        	$(document).on("click",".btnr",function(){
        		animateOut();
        		opt.callback();
        	}); 
	         function animateOut(){
	         	fbox.animate({"opacity":"0"},opt.speed,function(){
	         		$(this).css({"z-index":"8","display":"none"});
	         	});
        		box.animate({"opacity":"0","top":"-100%"},opt.speed,function(){
        			$(this).css({"z-index":"9","top":"100%","display":"none"});
        		});
	         }
        }
    });
})(jQuery);