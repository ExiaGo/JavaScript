function web_position(){
        $(document).ready(function(){
            $(window).scroll(function(){
                var top = $(document).scrollTop(); //浏览器滚动条距离，也可以写为$(window).scrollTop()
                var menu = $('#menu');         //导航元素
                var items = $('#content').find('.item'); //每一层的元素
                var currentId ='';     //当前楼层的Id
                items.each(function(){
                    var item_top = $(this).offset().top;     //当前楼层离流浪器的距离
                    if(top > item_top - 150){
                        currentId = '#' + $(this).attr('id');      //找到这层楼
                    }
                    else{
                        return false;
                    }
                });
                var current_link = menu.find('.current');   //有样式的楼层
                if(currentId && current_link != currentId){  //判断currentId是否有值，当前有current样式的楼层是否等于要添加current样式的楼层，有就不添加，没有就移除样式
                    current_link.removeClass('current'); //去除样式
                    menu.find('[href=' + currentId + ']').addClass('current'); //添加当前页面显示楼层对应的菜单选项的高亮
                }
            });
        });
       }   

window.onload = function(){
    web_position();
}   