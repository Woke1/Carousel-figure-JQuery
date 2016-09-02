$(function(){
    //淡入淡出效果
    var item = 0;  //图片序号用于选中对应图片序号
    var timeout = false;  
    var imgPosition = $('.banner_imgs li');
    var fadeTime = 1000;  //淡入淡出时间
    //给每个a标签绑定点击事件，触发显示响应图片
    $(".number").delegate('a','click',function(){
        //给当前a标签添加样式并移除其他a标签样式
        $(this).addClass('current')
        .siblings().removeClass('current');
        //显示相应图片
        item = $(this).attr('item');
        imgPosition.eq(item).stop().fadeIn(fadeTime)
        .siblings().fadeOut(fadeTime-200);
    })
    //自动轮播
    function timePlay(){
        $('.number a').eq(item).addClass('current')
        .siblings().removeClass('current');

        imgPosition.eq(item).stop().fadeIn(fadeTime)
        .siblings().fadeOut(fadeTime-200);  

        item ++;
        if(item == 5){
            item = 0;
        }     
    }
    //自动轮播定时器函数
    function timer(){
        if(!timeout){
            timePlay();
        }
        setTimeout(timer, fadeTime * 2);
    }
    //设置鼠标移入暂停轮播，鼠标移出继续轮播
    $('.banner').hover(function(){
        timeout = true;
    },function(){
        timeout = false;
    });
    //启动自动轮播
    setTimeout(timer,fadeTime * 2);
});