import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as m,i as l}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]"),b=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),w=document.querySelector("[data-minutes]"),k=document.querySelector("[data-seconds]");let u=null,a=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),r.disabled=!0):(r.disabled=!1,u=t)}};m(i,S);function o(e){return String(e).padStart(2,"0")}function s({days:e,hours:t,minutes:n,seconds:d}){b.textContent=o(e),y.textContent=o(t),w.textContent=o(n),k.textContent=o(d)}function v(){r.disabled=!0,i.disabled=!0,a=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(a),s(c(0)),l.success({title:"Success",message:"Countdown has finished!"}),i.disabled=!1;return}const n=c(t);s(n)},1e3)}function c(e){const f=Math.floor(e/864e5),h=Math.floor(e%864e5/36e5),x=Math.floor(e%864e5%36e5/6e4),g=Math.floor(e%864e5%36e5%6e4/1e3);return{days:f,hours:h,minutes:x,seconds:g}}r.addEventListener("click",v);const z=`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
padding: 36px 156px;
font-family: "Montserrat", sans-serif;
}

input {
padding: 8px 16px;
border-radius: 8px;
width: 272px;
height: 40px;
font-weight: 400;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #2e2f42;
}

input.flatpickr-input:hover {
background: #fff;
border: 1px solid #4e75ff;
border-radius: 4px;
width: 272px;
height: 40px;
}

button:disabled {
border-radius: 8px;
padding: 8px 16px;
width: 75px;
height: 40px;
background: #cfcfcf;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #989898;
}

button {
border-radius: 8px;
border: none;
padding: 8px 16px;
width: 75px;
height: 40px;
background: #4e75ff;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #fff;
}

button:hover {
border-radius: 8px;
padding: 8px 16px;
width: 75px;
height: 40px;
background: #6c8cff;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #fff;
}

.flatpickr-input {
}

.timer {
display: flex;
gap: 24px;
margin-top: 32px;
}

.field {
display: flex;
flex-direction: column;
align-items: center;
}

.value {
font-weight: 400;
font-size: 40px;
line-height: 120%;
letter-spacing: 0.04em;
color: #2e2f42;}

.label {
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #2e2f42;
}

.ico-error {
border-bottom: 2px solid #ffbebe;
border-radius: 4px;
padding: 20px;
width: 302px;
height: 64px;
background: #ef4040;
}

`,p=document.createElement("style");p.innerText=z;document.head.appendChild(p);
//# sourceMappingURL=1-timer.js.map
