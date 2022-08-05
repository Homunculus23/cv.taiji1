let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*
你好，我是一名前端新人
接下来我要加样式了
我要加的样式是
*/
body{
    color:red;
}`;
let n = 0;
let string2 = ``;
let step = ()=>{
    string2 += string[n] !== "\n" ? string[n] !== " " ? string[n] : "&nbsp;" : `<br>`;
    //不是回车就照搬到string2，是回车就转义。空格同理
    //暂时三元套三元，有需要再改回来，反正三元比if语句性能强千分之三
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    n++;
    setTimeout(()=>{
        n < string.length ? step() : console.log(`输出完毕`);
    //n不是最后一个就继续
    }, 100);
} //step()
;

//# sourceMappingURL=index.de158e3a.js.map
