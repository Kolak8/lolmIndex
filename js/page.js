var showPage = (function(){
    var oPages = $$('.page');   //获取各个页面的DOM数组
    var oPages_container = $('.pages_container') //页面容器
    var h = document.documentElement.clientHeight; //页面高度
    var PageIndex = 0; //当前显示页面的索引
    var nextIndex = null; //下一个页面的索引

    //静止时各个页面的状态
    function setStatic(){
        nextIndex = null;
        for(var i = 0; i < oPages.length; i++){
            //设置静止状态的zIndex
            if(i != PageIndex){
                //当前不显示的页面的z-index比较高，是为了滑出的时候可以覆盖当前显示的页面
                oPages[i].style.zIndex = 10;
            }else{
                //当前页面的z-index值是最低的，为了呈现出上下滑动其他页面覆盖当前页面的效果
                oPages[i].style.zIndex = 1;             
            }
            //设置静止状态的位置: 页面高度 * (该页面的索引 - 显示页面的索引)
            oPages[i].style.top = (i - PageIndex) * h + 'px'; 
        }    
        
    }

    setStatic();

    //滑动中的页面状态
    function moving(dis){ //dis是当前的滑动距离
        for(var i = 0; i < oPages.length; i++){
            //循环页面：不是当前显示的页面则需要调整位置，当前显示的页面不动，实现上下滑动翻页的效果
            if(i != PageIndex){
                oPages[i].style.top =(i - PageIndex) * h + dis + 'px';
            }        
        }
        if(dis > 0 && PageIndex > 0 ){
            //如果滑动距离大于0  且 当前不是第一页，则向上翻页
            nextIndex = PageIndex - 1;
        }else if (dis < 0 && PageIndex < oPages.length - 1){
            //如果滑动距离小于0  且 当前不是最后一页，则向下翻页
            nextIndex = PageIndex + 1;
        }else{
            //没有滑动距离，还是原来的页面
            setStatic();
            nextIndex = null;
            return;
        }
    }


    //完成滑动之后的处理函数
    function finishMove(){
        if(nextIndex === null){
            //下一页还是当前页面，防止页面还在其他地方再调用一次设置静止状态
            setStatic();
            return;
        }else{
            //下一页是其他的页面，这时候需要对页面的位置进行调整
            var nextPage = oPages[nextIndex]; //获取到下个页面的DOM节点
            nextPage.style.transition = '0.5s'; //为页面切换做过渡效果
            nextPage.style.top = 0; //将下个页面的位置调整为当前页面
            PageIndex = nextIndex; 
            setTimeout(function(){
                //等待页面切换过渡效果完成，将过渡效果取消，重置当前的静止状态
                nextPage.style.transition = '';
                setStatic();
            },500)   
        }
        
    }

    //触摸滑动函数,目的是实现拖拽效果和获取滑动距离
    oPages_container.ontouchstart = function(e){ //e是触摸事件
        var y = e.touches[0].screenY; //获取当前触摸屏幕的位置
        oPages_container.ontouchmove = function(e){ //开始滑动
            var dis = e.touches[0].screenY - y; //计算滑动距离
            if(Math.abs(dis) < 39){
                //防止误触
                dis = 0
            }
            moving(dis); //调用滑动页面函数
        }
        oPages_container.ontouchend = function(){ //触摸事件结束
            oPages_container.ontouchmove = null; //终止滑动事件
            finishMove(); //调用完成滑动后的处理函数
        }
    }

    function showPage(index){
        if(index === 0){
            PageIndex = 1;
        }else if(index > PageIndex && index < oPages.length || index == oPages.length - 1){
            PageIndex = index - 1;
        }else if(index <= PageIndex && index > 0 ){
            PageIndex = index + 1;
        }
        setStatic();
        oPages[0].clientHeight;
        nextIndex = index;
        finishMove()
    }


return showPage;
})()

