var $jscomp=$jscomp||{};$jscomp.scope={},$jscomp.createTemplateTagFirstArg=function(e){return e.raw=e},$jscomp.createTemplateTagFirstArgWithRaw=function(e,t){return e.raw=t,e};var aa=document.querySelectorAll('input[name="firstpurchaseunits"]')[0],bb=document.querySelectorAll('input[name="firstpurchasepricepershare"]')[0],cc=document.querySelectorAll('input[name="secondpurchaseunits"]')[0],dd=document.querySelectorAll('input[name="secondpurchasepricepershare"]')[0],kk=document.querySelectorAll('input[name="adddividendprise"]')[0];jQuery(document).ready(function(){jQuery(".changeresult").on("input",function(){document.getElementById("firstbuyunits").innerText=aa.value,document.getElementById("firstbuypershare").innerText=Number(bb.value).toLocaleString("hi-IN"),document.getElementById("firstbuytotal").innerText=(aa.value*bb.value).toLocaleString("hi-IN"),document.getElementById("secondbuyunits").innerText=cc.value,document.getElementById("secondbuypershare").innerText=Number(dd.value).toLocaleString("hi-IN"),document.getElementById("secondbuytotal").innerText=(cc.value*dd.value).toLocaleString("hi-IN"),0<Number(kk.value)?document.getElementById("totaldividend")?document.getElementById("totaldividend").innerText="-"+Number(kk.value).toLocaleString("hi-IN"):jQuery("#maintotaltable tbody").children().eq(2).before('<tr>\n                                <td class="px-1.5 py-0.5"><b>Dividend</b></td>\n                                <td>:</td>\n                                <td class="px-1.5 py-0.5" id="totaldividend">-'+Number(kk.value).toLocaleString("hi-IN")+"</td>\n                            </tr>"):document.getElementById("totaldividend")&&jQuery("#maintotaltable tbody").children().eq(2).remove(),document.getElementById("totalunits").innerText=Number(aa.value)+Number(cc.value);var e=Number(aa.value*bb.value)+cc.value*dd.value-Number(kk.value),t=Number(aa.value)+Number(cc.value);document.getElementById("totalpershare").innerText=Math.round(e/t).toLocaleString("hi-IN"),document.getElementById("maintotal").innerText=(aa.value*bb.value+cc.value*dd.value-Number(kk.value)).toLocaleString("hi-IN")})});