var aa=document.querySelectorAll('input[name="purchaseunits"]')[0],bb=document.querySelectorAll('input[name="purchasepricepershare"]')[0],cc=document.querySelectorAll('input[name="splitratioone"]')[0],dd=document.querySelectorAll('input[name="splitratiotwo"]')[0];jQuery(document).ready(function(){jQuery(".changeresult").on("input",function(){document.getElementById("oldshareqty").innerText=Number(aa.value).toLocaleString("hi-IN"),document.getElementById("oldpricepershare").innerText=Number(bb.value).toLocaleString("hi-IN"),document.getElementById("oldtotal").innerText=(Number(bb.value)*Number(aa.value)).toLocaleString("hi-IN");var e=Number(aa.value)*Number(bb.value),t=Number(aa.value)/(Number(cc.value)/Number(dd.value));document.getElementById("newshareqty").innerText=t.toLocaleString("hi-IN"),document.getElementById("newpricepershare").innerText=(e/t).toLocaleString("hi-IN"),document.getElementById("newtotal").innerText=e.toLocaleString("hi-IN")})});