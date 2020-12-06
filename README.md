# lolmIndex
lolmIndex coded by JavaScript
## 主要技术
  原生JS，HTML5,CSS3，SCSS编译；
## 核心板块
---
  ### Page在移动端的上下滑动切换
---
  ### 轮播图框架
---
  ### 弹出框模板
---
## 遇到的问题及解决方法
---
### 1.页面加载时的transition问题
 	 解决办法：给body添加 !important级别的CSS属性设置transition:none(这里需要兼容浏览器)；
 	 随后在页面加载完毕之后将body的!important的css属性去掉(oBody.className = '');
---

### 2.childNodes和children的区别
 	 node.childNodes不仅仅会选择到元素节点，还会选择到文本节点；
 	 node.children只是会取到元素节点；
 	 所以我们一般是使用children来取到节点的子节点。
---
### 3.100%高度无效的问题
	这可能是因为父元素的高度被限制了，所以子元素的100%无效，需要我们找到高度被限制的父元素
	一般我们会对html和body进行以下初始化属性:
	html,body{width:100%,height:100%, overflow: hidden}
---
### 4.scss编译css时的src资源引用路径问题
  	html页面在引用样式时引用的是css文件，所以我们在scss编译器上编写url的时候要以css文件所在的位置为准。
---
### 5.div页面排版问题(菜单栏和普通页面排版覆盖问题)
	z-index的作用效果问题，css的层叠上下文和z-index一起作用的结果，要注意z-index只有在有position定位属性的时候才会生效；
 	元素的层叠效果会受父元素的z-index影响,如果父元素的z-index值很小,那么子元素的z-index值很大也不起作用；
---
### 6.图片行高问题(基线对齐)  -->图片初始化为块元素
 	 图片的垂直对齐方式是以基线对齐，但是如果字体大小太大的话，行高就会比较大，图片元素高度会被撑开，这样不利于我们进行排版，所以我们一般会将图片转换为块元素；
### 7.before和after伪元素的定位问题
 	 before的初始定位会贴在原始元素的上面覆盖初始元素，而after为元素的位置会在原始元素的下方；
	  如果只有单一的伪类（after或before中的一个），在不设置position的情况下位置是重叠的；
 	 如果需要调整位置需要子绝父相进行定位，用margin的话伪元素之间的位置会相互影响；
---
### 8.全局变量污染问题(外面要用的函数需要返回，否则访问不到)
	return返回的函数可以给外部一个接口，这样就可以在外部作用域下面调用这个方法
---
### 9.移动端适配问题
 	 以iphone6/7/8为基准进行设计，设置根元素字体大小为26.666667vw(这样设置会自动适应其他设备的根元素字体大小)
 	 原理是 1vw / 3.75px = ? / 100px =>  ?=26.666667vw
### 10.分离公共代码以及css和js代码的选择问题
### 11.async和await的区别
### 12.querySelector('')里面的# . 都不能省
### 13.通用样式的全局变量污染问题
### 14.事件冒泡
### 15.vedio 元素display auto样式 和 .play() .pause()方法
### 16.video播放时无法绑定点击事件
### 17.video倍速控制问题
### 18.背景图片定位方法有三种：
	1）关键字：background-position: top left;
　　	2）像素：background-position: 0px 0px;
　　	3）百分比：background-position: 0% 0%;
	http://www.ruanyifeng.com/blog/2008/05/css_background_image_positioning.html
### 19.视频暂停时的中间开始按钮在全屏模式下失效
### 20.布局定位问题；page页面会出现截半现象
### 21.雪碧图定位问题，雪碧图大小设置问题
