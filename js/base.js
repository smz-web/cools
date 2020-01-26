/*设置cookie*/
function setCookie(name,value,expires)
{

    var exp = new Date();
    exp.setTime(exp.getTime() + expires*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

//获取cookie
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return false;
}

//读取时间戳
function getTimestamp(){
    return Date.parse(new Date()) / 1000
}
