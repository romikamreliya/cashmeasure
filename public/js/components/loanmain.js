var $jscomp=$jscomp||{};$jscomp.scope={},$jscomp.createTemplateTagFirstArg=function(t){return t.raw=t},$jscomp.createTemplateTagFirstArgWithRaw=function(t,a){return t.raw=a,t};var loancalculatorchart,loancalculator=document.getElementById("loancalculator");function datagetandcalculetion(){var t=Number(jQuery('input[name="loanamount"]').val()),a=Number(jQuery('input[name="loaninterest"]').val()),n=Number(jQuery('input[name="loantenure"]').val()),e=Number(jQuery('input[name="feescharges"]').val()),o=Math.pow(1+(a=a/100/12),n*=12);return{playment:Math.round(a=t*o*a/(o-1)),interest:Math.round(a*n-t),total:Math.round(a*n+e),loanamount:t,feescharge:e}}function loanchartandcalqleter(){var t=datagetandcalculetion();jQuery("#tloanprincipal").text(t.playment.toLocaleString("hi-IN")),jQuery("#tloaninterest").text(t.interest.toLocaleString("hi-IN")),jQuery("#tloanpayments").text(t.total.toLocaleString("hi-IN")),jQuery("#tloanloanamount").text(t.loanamount.toLocaleString("hi-IN")),jQuery("#tloanfeescharges").text(t.feescharge.toLocaleString("hi-IN")),t=[{name:"Playment",value:t.playment},{name:"Interest",value:t.interest},{name:"Loan Amount",value:t.loanamount}],loancalculatorchart=new Chart(loancalculator,{type:"doughnut",data:{labels:t.map(function(t){return t.name}),datasets:[{label:"Amount",data:t.map(function(t){return t.value}),borderWidth:1}]},options:{responsive:!0,plugins:{tooltip:{callbacks:{footer:function(t){return"Total : "+(t[0].dataset.data[1]+t[0].dataset.data[2]+Number(jQuery('input[name="feescharges"]').val())).toLocaleString("hi-IN")}}}}}})}jQuery(document).ready(function(){jQuery(".rangeselecter").on("input",function(){jQuery(this).parent().find("div div:eq(1) input").val(jQuery(this).val())}),jQuery(".rangeinput").on("input",function(){jQuery(this).parent().parent().parent().find("input:eq(1)").val(jQuery(this).val())}),jQuery(".changeresult").on("input",function(){var t=datagetandcalculetion();jQuery("#tloanprincipal").text(t.playment.toLocaleString("hi-IN")),jQuery("#tloaninterest").text(t.interest.toLocaleString("hi-IN")),jQuery("#tloanpayments").text(t.total.toLocaleString("hi-IN")),jQuery("#tloanfeescharges").text(t.feescharge.toLocaleString("hi-IN")),jQuery("#tloanloanamount").text(t.loanamount.toLocaleString("hi-IN")),loancalculatorchart.data.datasets[0].data[0]=t.playment,loancalculatorchart.data.datasets[0].data[1]=t.interest,loancalculatorchart.data.datasets[0].data[2]=t.loanamount,loancalculatorchart.update()})}),loanchartandcalqleter();