function creatediv(tagname,attrname,attrvalue,idname,idvalue){
var div=document.createElement(tagname);
div.setAttribute(attrname,attrvalue);
div.setAttribute(idname,idvalue);
return div
}

let happyindependance=()=>{
    setTimeout(()=>{
        let res1=creatediv("span","class","main","id","main1");
        document.body.append(res1)
        res1.innerHTML="10"
        setTimeout(()=>{
            res1.innerHTML="9"
            setTimeout(()=>{
                res1.innerHTML="8"
                setTimeout(()=>{
                    res1.innerHTML="7"
                    setTimeout(()=>{
                        res1.innerHTML="6"
                        setTimeout(()=>{
                            res1.innerHTML="5"
                            setTimeout(()=>{
                                res1.innerHTML="4"
                                setTimeout(()=>{
                                    res1.innerHTML="3"
                                    setTimeout(()=>{
                                        res1.innerHTML="2"
                                        setTimeout(()=>{
                                            res1.innerHTML="1"
                                            setTimeout(()=>{
                                                res1.innerHTML="Happy Independance Day"
                                            },1000)},1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);  
}



happyindependance()

 /*function happyindependance(){
        setTimeout(()=>{
            document.body.append(res1)},1000)
                setTimeout(()=>{
                    document.body.append(res2)},2000)
                        setTimeout(()=>{
                            document.body.append(res3)},3000)}*/             


