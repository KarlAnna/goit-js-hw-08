const e=document.querySelector("form"),t=document.querySelector("input"),o=document.querySelector("textarea"),a=document.querySelector("button");e.addEventListener("input",(function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:t.value,msg:o.value}))})),function(){const e=localStorage.getItem("feedback-form-state");if(e){const a=JSON.parse(e);t.value=a.email,o.value=a.msg}}(),a.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset();const t=new FormData(e.target),o={};t.forEach(((e,t)=>o[t]=e)),console.log(o)}));
//# sourceMappingURL=03-feedback.03e2e90e.js.map
