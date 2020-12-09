var showPage = (function(){
    var PageIndex = 0;
var oPages = $$('.page');
var oPages_container = $('.pages_container')
var h = document.documentElement.clientHeight;
var nextIndex = null;
//静止状态

function setStatic(){
    nextIndex = null;
    for(var i = 0; i < oPages.length; i++){
        //设置静止状态的zIndex
        if(i != PageIndex){
            oPages[i].style.zIndex = 10;
        }else{
            oPages[i].style.zIndex = 1;
        }
        //设置静止状态的位置
        oPages[i].style.top = (i - PageIndex) * h + 'px'; 
    }    
    
}

setStatic();
function moving(dis){
    for(var i = 0; i < oPages.length; i++){
        if(i != PageIndex){
            oPages[i].style.top =(i - PageIndex) * h + dis + 'px';
        }        
    }
    if(dis > 0 && PageIndex > 0 ){
        nextIndex = PageIndex - 1;
    }else if (dis < 0 && PageIndex < oPages.length - 1){
        nextIndex = PageIndex + 1;
    }else{
        setStatic();
        nextIndex = null;
        return;
    }
}

function finishMove(){
    if(nextIndex === null){
        setStatic()
        return;
    }else{
        var nextPage = oPages[nextIndex];
        nextPage.style.transition = '0.5s';
        nextPage.style.top = 0;
        PageIndex = nextIndex;
        setTimeout(function(){
            nextPage.style.transition = '';
            setStatic();
            // console.log(PageIndex);
        },500)   
    }
    
}


oPages_container.ontouchstart = function(e){
    var y = e.touches[0].screenY;
    oPages_container.ontouchmove = function(e){
        var dis = e.touches[0].screenY - y;
        if(Math.abs(dis) < 39){
            //防止误触
            dis = 0
        }
        moving(dis);
    }
    oPages_container.ontouchend = function(){
        oPages_container.ontouchmove = null;
        finishMove();
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

