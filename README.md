cools.js
===============

### 依赖少
任意版本jq
getCookie和setCookie方法

### 参与开发
maser_mz

### 代码简洁+调用简单
countdown = getMzCools($,function(){
	console.log("ok")
})
countdown.name = "mail_lasttime"
countdown.dom = ".send-mail"
countdown.text = "邮箱验证"
countdown.cd_text = "%d秒后再试"
// countdown.cd_func = function(object,cd){ //点击后进入冷却触发
// }
countdown.run()