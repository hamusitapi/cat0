//dom
    var reinput=document.getElementById("rekeywd");
    var keywdinput=document.getElementById("keywd");
    var sc_menu_dom=document.getElementById("sc_menu");
    var sc_img_dom=document.getElementById("sc_img");
//版本号
    var version;
    console.log("版本号"+version);
    var version_dom=document.getElementById("version");
    version_dom.innerHTML="Copyright 猫蛋 "+version+" Rights Reserved.";
//客户端类检测

//设参类
    var sc_kind=checkCookie("searcher","baidu");
    var firstload=checkCookie("firstload","done");
    if (firstload=="") {
        console.log("firstload!");
        setTimeout("close_manual('open')",800)
        
    }else{
        console.log("not firstload!");
        close_manual("close");
    }
    sc_change(sc_kind);
//杂类函数
    var option_tg = new Array()
    for (let i = 0; i < 4; i++) {
        option_tg[i] = 0;
        
    }

    var options_dom
    function option(s) {
        options_dom=document.getElementById(s);
        if (s=="link"){
            o_i=0;
            if (option_tg[o_i]==0) {
                option_tg_on(o_i);
            }else{
                option_tg_off(o_i)
            }
        }
        if (s=="set"){
            o_i=1;
            if (option_tg[o_i]==0) {
                option_tg_on(o_i);
            }else{
                option_tg_off(o_i)
            }
        }
        if (s=="faq"){
            o_i=2;
            if (option_tg[o_i]==0) {
                option_tg_on(o_i);
            }else{
                option_tg_off(o_i)
            }
        }
    }
    function option_tg_on(o_i) {
        options_dom.style.height="320px";
        options_dom.style.backgroundColor="rgba(0, 0, 0, 0.55)"
        option_tg[o_i]=1;
    }
    function option_tg_off(o_i) {
        options_dom.style.height="0px";
        options_dom.style.backgroundColor="rgba(0, 0, 0, 0.1)"
        option_tg[o_i]=0;
    }
    function close_manual(bl) {
        if (bl=="open") {
            document.getElementById("manual").style.height="250px";
            document.getElementById("manual").style.backgroundColor="rgba(0, 0, 0, 0.55)"
        }
        if (bl=="close") {
            document.getElementById("manual").style.height="0px";
            document.getElementById("manual").style.backgroundColor="rgba(0, 0, 0, 0)"
        }
    }
//cookie调用函数
    //添加
    function setCookie(cname,cvalue,exdays){
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires+"path='http://127.0.0.1'";
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
            return "";
        }else{
            return checkc;
        }
    }
//按键检测
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];    
        if(e||e.keyCode==13){ // enter 键
            var keywds=document.getElementById("keywd").value;
            sc(keywds);
            return false;
        }
    }; 
//关键词
    keywdinput.onkeyup = function () {
        var value = keywdinput.value;
        var oScript = document.createElement('script');
        oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=outkywd'
        document.body.appendChild(oScript);
        oScript.remove();
    }
    function outkywd(data) {
        var list = data.s;
        console.log(list);
        var str = '';
        for(i=0;i<=5&&list[i]!=undefined;i=i+1){
            str += "<div class=\"keywds_1\" onclick=\"sc('"+list[i]+"')\">" + list[i] + '</div>';
        }
        console.log(str);
        document.getElementById("keywds").innerHTML=str;
    }
//搜索
    function sc(keywds) {
        console.log("搜索！");
        keywds=encodeURIComponent(keywds);
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
        if (keywds=="") {
            return false;
        }
    }
//输入框相关
    function rekeywds(i) {
        var keywd=keywdinput.value;
        if (i==1) {
            reinput.style.display="block";
        }else{
            reinput.style.display="none";
            keywdinput.value="";
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
        if (sc_menu_o==0) {
            sc_menu_dom.style.height="170px";
            sc_menu_dom.style.border="1px #808080 solid";
            sc_menu_dom.style.backgroundColor="rgba(255, 255, 255, 1)"
            sc_menu_o=1;
        }else{
            sc_menu_dom.style.height="0px";
            sc_menu_dom.style.border="";
            sc_menu_dom.style.borderRadius="";
            sc_menu_dom.style.backgroundColor="rgba(255, 255, 255, 0)"
            sc_menu_o=0;
        }
    }
    function sc_change(scr_name) {
        if (scr_name=="miji") {
            sc_img_dom.innerHTML="<svg t=\"1563627149093\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2730\" width=\"32\" height=\"32\"><path d=\"M517.864056 487.834624c-56.774051-54.213739-58.850339-144.187937-4.6366-200.960964 54.212716-56.773028 144.187937-58.849316 200.960964-4.6366 56.775074 54.213739 58.850339 144.186913 4.6366 200.960964C664.613328 539.972075 574.639131 542.048363 517.864056 487.834624zM687.194626 452.994118c37.533848-39.308261 36.09508-101.596909-3.210112-139.128711-39.304168-37.531801-101.593839-36.094056-139.127687 3.211135-37.532825 39.307238-36.093033 101.593839 3.212158 139.125641C587.374176 493.736031 649.660778 492.302379 687.194626 452.994118zM479.104287 670.917406l-101.495602 106.289792c26.206872 25.024953 27.167756 66.540486 2.14178 92.749404-25.028023 26.209942-66.543555 27.16571-92.750427 2.140757l-58.361199 53.027727c0 0-68.750827 11.100826-100.379175-19.101033-31.630395-30.205952-37.865399-112.721271-37.865399-112.721271l246.37427-258.302951c-63.173808-117.608581-47.24707-267.162736 49.939389-368.939747 36.517705-38.242999 80.346933-65.156976 127.165238-81.040734l1.084705 46.269813c-35.443233 14.07967-68.566632 35.596729-96.618525 64.973804-80.271208 84.064604-96.099708 205.865671-49.433876 305.083393l23.075555 39.163975L146.090774 798.015106c0 0 0.593518 49.77873 17.242709 65.677838 14.888082 14.216793 61.832254 9.828856 61.832254 9.828856l60.407812-63.260789 31.631418 30.203906c8.741082 8.346085 22.570042 8.030907 30.91715-0.711198 8.347109-8.742105 8.026814-22.571065-0.713244-30.91715l-31.632441-30.207999 156.456355-163.846672 39.009456 22.481014c101.259218 42.039465 222.201731 20.61041 302.474986-63.453171 104.251366-109.178585 100.260471-282.211477-8.91709-386.464889-33.591049-32.075533-73.260537-53.829999-115.093295-65.49262l-1.030469-45.153386c53.197596 12.471033 103.945397 38.547944 146.323577 79.015611 126.645398 120.931257 131.277906 321.649698 10.344602 448.296119C748.158093 705.787588 599.500355 728.598106 479.104287 670.917406z\" p-id=\"2731\" fill=\"#707070\"></path></svg>";
            sc_menu();
            setCookie("searcher",scr_name,3650);
            sc_kind=checkCookie("searcher","miji");
            console.log(scr_name);
        }
        if (scr_name=="baidu") {
            sc_img_dom.innerHTML="<svg t=\"1563503489176\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1125\" width=\"32\" height=\"32\"><path d=\"M418.771173 357.469533c47.313933 0 85.627272-55.949638 85.627272-125.035277S466.206736 107.520608 418.771173 107.520608c-47.313933 0-85.748901 55.828008-85.748901 124.913648 0 69.08564 38.434969 125.035277 85.748901 125.035277zM622.744092 365.740349c63.369046 8.514075 103.993348-60.814824 112.020905-113.358831 8.270816-52.422378-32.596745-113.480461-77.356456-123.940611-45.002969-10.581779-101.074237 63.247417-106.061052 111.291128-6.081482 58.990379 8.149186 117.615869 71.396603 126.008314zM259.557965 533.832522c85.748901-18.852595 74.072455-124.06224 71.518233-147.050244-4.257038-35.394227-44.88134-97.425347-99.97957-92.438532-69.450529 6.324742-79.545789 109.223423-79.54579 109.223423-9.365483 47.557192 22.379855 149.239577 108.007127 130.265353zM777.821892 674.436394s-97.911866-77.721345-155.0778-161.767431c-77.599715-123.818981-187.674546-73.464307-224.528329-10.46015-36.732153 63.004157-93.776458 102.898682-101.925644 113.480461-8.270816 10.33852-118.224017 71.396603-93.898088 182.68773 24.447559 111.291127 110.31809 109.223423 110.31809 109.223424s63.247417 6.324742 136.590094-10.46015c73.464307-16.784891 136.711723 4.135408 136.711723 4.135408s171.497803 58.990379 218.325217-54.490082c46.949044-113.480461-26.515263-172.34921-26.515263-172.34921zM873.666054 453.921843c0-25.177337-20.312151-100.830978-95.844162-100.830977-75.653641 0-85.627272 71.518233-85.627272 121.994536 0 48.16534 3.892149 115.426535 97.911866 113.358831C884.004574 586.2549 873.666054 479.22081 873.666054 453.921843z\" fill=\"#707070\" p-id=\"1126\"></path></svg>";
            sc_menu();
            setCookie("searcher",scr_name,3650);
            sc_kind=checkCookie("searcher","baidu");
            console.log(scr_name);
        }
        if (scr_name=="google") {
            sc_img_dom.innerHTML="<svg t=\"1563503643864\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4088\" width=\"32\" height=\"32\"><path d=\"M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z\" p-id=\"4089\" fill=\"#707070\"></path></svg>";
            sc_menu();
            setCookie("searcher",scr_name,3650);
            sc_kind=checkCookie("searcher","baidu");
            console.log(scr_name);
        }
        if (scr_name=="bing") {
            sc_img_dom.innerHTML="<svg t=\"1563505130948\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"22423\" width=\"32\" height=\"32\"><path d=\"M213.333333 128v682.666667l158.72 85.333333L768 674.986667v-174.506667L416.853333 381.866667l68.693334 165.973333L594.773333 597.333333 371.2 721.92V182.186667L213.333333 128\" fill=\"#707070\" p-id=\"22424\"></path></svg>";
            sc_menu();
            setCookie("searcher",scr_name,3650);
            sc_kind=checkCookie("searcher","baidu");
            console.log(scr_name);
        }
    }
