var oSwitch = $('.menu_switch');
var oUlNav = $('.menu_nav');

var toggleNav = (function(){
    
    var fun = oSwitch.onclick = function toggleNav(){
        oSwitch.classList.toggle("menu_switch--expand");
        oUlNav.classList.toggle("menu_nav--expand");
    };
    oUlNav.addEventListener('click', function(ev){
        var e = ev || window.event;
        var target = e.target;
        if((target.nodeName).toLowerCase() == 'a'){
            toggleNav();
        }
    },false)
    return fun;
})()