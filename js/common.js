function $(selectorName){
    return document.querySelector(selectorName);
}

function $$(selectorName){
    return document.querySelectorAll(selectorName);
}

function width(){
    return document.documentElement.clientWidth;
}

/* 轮播图通用函数 */
    
    //获取轮播图DOM节点
function createCarousel(carousel_Id, carouselDatas){
    var carousel_Index = 0;//初始化一个当前页面索引    
    var oCarouselId = document.getElementById(carousel_Id);
    var oCarouselList = oCarouselId.querySelector('.g_carousel-list');
    var oCarouselIndicator = oCarouselId.querySelector('.g_carousel-indicator');
    var oCarouselPrev = oCarouselId.querySelector('.g_carousel-prev');
    var oCarouselNext = oCarouselId.querySelector('.g_carousel-next');

    //创建轮播图元素
    for(var i = 0; i < carouselDatas.length; i++){
        var oList = document.createElement('li');
        //创建轮播图列表图片
        if(carouselDatas[i].link){
            var oA = document.createElement('a');
            var oImg = document.createElement('img');
            oImg.src = carouselDatas[i].image;
            oA.appendChild(oImg);
            oA.href = carouselDatas[i].link;
            oList.appendChild(oA);
        }else{
            var oImg = document.createElement('img');
            oImg.src = carouselDatas[i].image;
            oList.appendChild(oImg);
        }
        oCarouselList.appendChild(oList);
        //创建轮播图指示器
        var oInd = document.createElement('li');
        if(i == 0){
            oInd.classList.add('selected')
        }
        oCarouselIndicator.appendChild(oInd)
    }
    oCarouselList.style.width = `${carouselDatas.length * width()}px`
    function setStatus(){
        
        oCarouselList.style.transition = '0.5s';
        oCarouselList.style.marginLeft = -width() * carousel_Index + 'px';

        var oSelevted = oCarouselIndicator.querySelector('.selected')
        if(oSelevted){
            oSelevted.classList.remove('selected');
        }
        oCarouselIndicator.children[carousel_Index].classList.add('selected');

        if(carousel_Index == 0 && oCarouselPrev){
            oCarouselPrev.classList.add('disabled');
        }else if(oCarouselPrev){
            oCarouselPrev.classList.remove('disabled')
        }

        if(carousel_Index == carouselDatas.length - 1 && oCarouselNext){
            oCarouselNext.classList.add('disabled');
        }else if(oCarouselNext){
            oCarouselNext.classList.remove('disabled');
        }
    }

    function toPrev(){
        if(carousel_Index == 0){
            return;
        }
        carousel_Index--;
        setStatus();
    }

    function toNext(){
        if(carousel_Index == carouselDatas.length - 1){
            return;
        }
        carousel_Index++;
        setStatus();
    }

    if(oCarouselPrev){
        oCarouselPrev.onclick = toPrev;
    }

    if(oCarouselNext){
        oCarouselNext.onclick = toNext;
    }

    var timer = null;
    function start(){
        if(timer){
            return;
        }
        timer = setInterval(function(){
            carousel_Index++;
            if(carousel_Index == carouselDatas.length){
                carousel_Index = 0;
            }
            setStatus();
        },4000)       
    }

    function stop(){
        clearInterval(timer);
        timer = null;
    }
    oCarouselId.ontouchstart = function(ev){
        ev.stopImmediatePropagation();
        stop();
        var timeStart = Date.now()
        oCarouselList.style.transition = 'none';
        
        var X = ev.touches[0].clientX;
        oCarouselId.ontouchmove = function(ev){
            var dis = ev.touches[0].clientX - X;            
            oCarouselList.style.marginLeft = -width() * carousel_Index + dis + 'px';
        }
        oCarouselId.ontouchend = function(ev){
            var TouchTime = (Date.now() - timeStart);
            var dis = ev.changedTouches[0].clientX - X;
            if((TouchTime < 300 && dis < -20  || dis < -(width() / 3)) && carousel_Index < carouselDatas.length - 1){
                console.log('向右滑动')
                carousel_Index++;
            }else if((TouchTime < 300 && dis > 20 || dis > width() / 3) && carousel_Index > 0){
                carousel_Index--;
            }
            setStatus();
            start();
        }
    }
    start();
    return setStatus;
}


