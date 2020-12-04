


var showPop = (function(){
    var oPopAtnd = $('.menu_attend');
    var oPopCloseBtns = $$('.pop_close');
    var oFAQ = $('.menu_nav .FAQ')
    var oPopBtns = $$('.pop_btn');

    //弹出函数
    function showPop(id) {
        $("#" + id).style.display = '';
    }
    
    //给menu_attend加点击事件
    oPopAtnd.onclick = function(){
        showPop('popAttend');
        oSwitch.classList.remove("menu_switch--expand");
        oUlNav.classList.remove("menu_nav--expand");
    }

    //给弹出框关闭按钮添加点击事件
    for(let i = 0; i < oPopCloseBtns.length; i++){
        let container = oPopCloseBtns[i].parentNode.parentNode;
        oPopCloseBtns[i].onclick = function(){        
            container.style.display = 'none';
        }
        if(i < oPopBtns.length){
            oPopBtns[i].onclick = function(){
                container.style.display = 'none';
            }
        }
    }

    //给FAQ添加点击事件
    oFAQ.onclick = function(){
        showPop('popFAQ');
    }

    return showPop;
})();

( function(){
    var oPopQq = $('.pop_qq');
    var oPopWx = $('.pop_wx');
    oPopWx.onclick = function(){
        oPopWx.classList.add("selected");
        oPopQq.classList.remove('selected');
    }

    oPopQq.onclick = function(){
        oPopQq.classList.add("selected");
        oPopWx.classList.remove('selected');
    }

})();

(function(){
    var oPopVid= $('.vid_ani');
    var oPopVedio = document.getElementById('popVideo');
    var oVideo = oPopVedio.querySelector('video');
    var oPopClose = oPopVedio.querySelector('.pop_close');
    var oPlayBtn = $('.play_btn')


    oPopVid.onclick = function(){
        showPop('popVideo');
        oVideo.play();
        oPlayBtn.style.display = 'none';
    }
    oPopClose.onclick = function(){
        oVideo.pause();
        oPopVedio.style.display = 'none';
    }
    oVideo.onpause = function(){
        oVideo.classList.add('onpouse');
    }
    oVideo.onplay = function(){
        oVideo.classList.remove('onpouse');
    }
    oPlayBtn.onclick = function(){
        oVideo.play();
        oVideo.classList.remove('onpouse');
    }
})()