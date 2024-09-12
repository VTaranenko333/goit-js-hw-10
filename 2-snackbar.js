import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector(".form"),p=n.querySelector('input[name="delay"]'),d=n.querySelectorAll('input[name="state"]');function l(t,i){return new Promise((r,e)=>{setTimeout(()=>{i==="fulfilled"?r(t):e(t)},t)})}n.addEventListener("submit",t=>{t.preventDefault();const i=Number(p.value),r=Array.from(d).find(e=>e.checked).value;l(i,r).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})});const a=`
* {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
}

body {
    padding: 36px 156px;
    font-family: "Montserrat", sans-serif;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 360px;
    }

.form input[name="delay"] {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #2e2f42;
    border: 1px solid #808080;
    border-radius: 4px;
    width: 360px;
    height: 40px;
    padding: 8px 16px
    }

.form input[name="delay"]:hover {
    border: 1px solid #4e75ff;
    border-radius: 4px;
    width: 360px;
    height: 40px;
    }

.form input[name="state"] {

}

legend {
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #2e2f42;
    margin-left: -20px;
    font-size: 16px;
}

fieldset {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 1px solid #808080;
    border-radius: 4px;
    stroke: #808080;
    padding: 24px 30px 8px 30px;
}

button {
border: none;
border-radius: 8px;
padding: 8px 16px;
width: 360px;
height: 40px;
background: #4e75ff;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #fff;
}

button:hover {
border: none;
background: #6c8cff;
font-weight: 500;
font-size: 16px;    
line-height: 150%;
letter-spacing: 0.04em;
color: #fff;
}

`,s=document.createElement("style");s.innerText=a;document.head.appendChild(s);
//# sourceMappingURL=2-snackbar.js.map
