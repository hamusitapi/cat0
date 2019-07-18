//版本号
    var version;
    console.log("版本号"+version);
    var domfooter=document.getElementById("footer");
    domfooter.innerHTML="<small>Copyright 猫蛋 "+version+" Rights Reserved.</small>";
//设参类
    var sc_kind=checkCookie("searcher","miji");
    var firstload=checkCookie("firstload","done");
    sc_change(sc_kind);
//首次访问说明
//cookie调用函数
    //添加
    function setCookie(cname,cvalue,exdays){
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    //读取
    function getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) 
        {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) return c.substring(name.length,c.length);
        }
        return "";
    }
    //检测
    function checkCookie(cname,cvalue){
        var checkc=getCookie(cname);
        if (checkc=="" || checkc==null){
            setCookie(cname,cvalue,3650);
        }else{
            return checkc
        }
    }
//端类检测
    try{
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            console.log("移动端")
            /* window.location.href="mindex.html"; */
        }else{
            console.log("桌面端")
            /* window.location.href="cindex.html"; */
        }
    }catch(e){}
//按键检测
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];    
        if(e && e.keyCode==13){ // enter 键
            var keywds=document.getElementById("keywd").value;
            if (keywds=="") {
                return false;
            }
            console.log("搜索！");
            if (sc_kind=="miji") {
                window.open("https://mijisou.com/?q="+keywds); 
            }
            if (sc_kind=="baidu") {
                window.open("https://www.baidu.com/s?wd="+keywds); 
            }
            if (sc_kind=="google") {
                window.open("https://www.google.com/search?q="+keywds); 
            }
            if (sc_kind=="bing") {
                window.open("https://cn.bing.com/search?q="+keywds); 
            }
            return false;
        }
    }; 
//输入框相关
    var reinput=document.getElementById("rekeywd");
    var keywdinput=document.getElementById("keywd");
    function rekeywds(i) {
        var reinput=document.getElementById("rekeywd");
        var keywdinput=document.getElementById("keywd");
        var keywd=keywdinput.value;
        if (i==1) {
            reinput.style.display="block";
        }else{
            reinput.style.display="none";
            keywdinput.focus();
        }
        if (keywd=="") {
            reinput.style.display="none";
        }
    }
    function plhd(i) {
        if (i==1) {
            keywdinput.setAttribute("placeholder","Enter For Search!");
        }else{
            keywdinput.setAttribute("placeholder","");
            if (sc_menu_o==1) {
                sc_menu(); 
            }
        }
    }
//搜索引擎选择
    var sc_menu_o=0;
    function sc_menu() {
        var sc_menu_dom=document.getElementById("sc_menu");
        if (sc_menu_o==0) {
            sc_menu_dom.style.height="170px";
            sc_menu_dom.style.border="1px #808080 solid";
            sc_menu_o=1;
        }else{
            sc_menu_dom.style.height="0px";
            sc_menu_dom.style.border="";
            sc_menu_o=0;
        }
    }
    function sc_change(scr_name) {
        var sc_img_dom=document.getElementById("sc_img");
        if (scr_name=="miji") {
            sc_img_dom.style.backgroundImage="url('./img/"+scr_name+".png')";
            sc_menu();
            setCookie("searcher",scr_name,3650);
            sc_kind=checkCookie("searcher","miji");
            console.log(scr_name);
        }
        if (scr_name=="baidu") {
            sc_img_dom.style.backgroundImage="url('./img/"+scr_name+".png')";
            sc_menu();
            setCookie("searcher",scr_name,3650);
            sc_kind=checkCookie("searcher","baidu");
            console.log(scr_name);
        }
        if (scr_name=="google") {
            sc_img_dom.style.backgroundImage="url('./img/"+scr_name+".png')";
            sc_menu();
            setCookie("searcher",scr_name,3650);
            sc_kind=checkCookie("searcher","baidu");
            console.log(scr_name);
        }
        if (scr_name=="bing") {
            sc_img_dom.style.backgroundImage="url('./img/"+scr_name+".png')";
            sc_menu();
            setCookie("searcher",scr_name,3650);
            sc_kind=checkCookie("searcher","baidu");
            console.log(scr_name);
        }
    }
