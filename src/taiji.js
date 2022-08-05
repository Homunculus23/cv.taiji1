let html1 = document.querySelector('#html1');
let style1 = document.querySelector('#style1');

let tjString = `
/* 你好，我叫邱望
 * 接下来我要展示一下我的前端功底
 * 首先我要准备一个div
 */
#div1{
    border: 1px solid red;
    width: 300px;
    height: 300px;
}
/* 接下来我把div变成一个太极图
 * 请看
 * 我们首先需要一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 5);
    border: none;
}
/* 太极分阴阳
 * 白为阳，黑为阴
 */
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 阳中有阴
 * 阴中有阳
 * 阴阳互根
 */
#div1::before{
    top: 0;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
    border-radius: 50%;
}
#div1::after{
    bottom: 0;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
    border-radius: 50%;
}
`;
let tjn = 0;
let tjString2 = ``;
let time = 100;

let tjStep = ()=>{
    if(tjString[tjn] !== '\n'){
        tjString2 += tjString[tjn]
    }else if(tjString[tjn] !== ' '){
        tjString2 += `<br>`;
    }else{
        tjString2 += '&nbsp;';
    }
    //不是回车就照搬tjString2，是回车就转义。空格同理
    html1.innerHTML = tjString2;
    style1.innerHTML = tjString.substring(0, tjn);
    tjn++;
    html1.scrollTo({
        top: 1000,
        behavior: 'smooth'});
    if (tjString[tjn] === '{') {
        time = 10;
    }
    if (tjString[tjn] === '}') {
        time = 100;
    }
    setTimeout(() => {
        tjn < tjString.length ? tjStep() : console.log(`输出完毕`);
        //tjn不是最后一个就继续
    }, time);
}

tjStep()
