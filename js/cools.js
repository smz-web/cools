function getMzCools($,callback){
    return {
        name: "",
        dom: "",
        text: "",   //文字描述
        cd: 10, //冷却时间
        cd_text: "%d",  //冷却时文字描述 %d剩余事件
        cd_func: function(object,cd){},
        display: false,
        callback: callback ,
        run: function(){
            this.bind()
            this.cron()
        },
        cron: function(){
            cools = this
            var mail_timestamp = getCookie(this.name)
            if(mail_timestamp == false){ mail_timestamp = 0 }
            var timestamp = getTimestamp() - this.cd;
            var end_timestamp =  mail_timestamp - timestamp;
            if(this.display = (end_timestamp <= 0)){
                $(this.dom).text(this.text);
            }else{
                cd_text = this.cd_text.replace("%d",end_timestamp)
                $(this.dom).text(cd_text);
                this.cd_func($(this.dom),end_timestamp)
            }
            setTimeout(function(){
                cools.run()
            },1000)
        },
        bind: function(){
            cools = this
            $(this.dom).click(function(){
                if(cools.display){
                    setCookie(cools.name,getTimestamp())
                    cools.callback()
                }
            });
        }
    }
}

