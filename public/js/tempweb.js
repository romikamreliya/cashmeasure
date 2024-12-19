try {

    const newcookies = Object.fromEntries(
        document.cookie.split('; ').map(item => item.split('='))
    );
    if (newcookies?._newtemp_) {
        if (!localStorage.getItem('_newtemp_')) {
            const tempnew = JSON.parse(atob(newcookies._newtemp_.replaceAll('%3D', '=')));
            localStorage.setItem("_newtemp_", JSON.stringify({ ...tempnew, pageid: 1 }));
        }
    }
    if (localStorage.getItem('_newtemp_')) {

        document.getElementById('topbtnweb').style.textAlign = "center";
        document.getElementById('topbtnweb').style.paddingTop = "20px";
        document.getElementById('bottombtnweb').style.textAlign = "center";
        document.getElementById('bottombtnweb').style.paddingBottom = "20px";
        const newlocltempjson = JSON.parse(localStorage.getItem('_newtemp_'))

        switch (newlocltempjson.pageid) {
            case 1:
                document.getElementById('topbtnweb').innerHTML = `
                    <div class="text-3xl mb-3">Please Verify - That you are Human..</div>
                    <button onclick="topbtnone()" class="btn btn-secondary">Click to verify</button>`;
                function topbtnone() {
                    let timwecounter = 10;

                    fetch("https://www.cashmeasure.com/api/v1/newcount", {method: 'GET'})
                        .then(response => response.text())
                        .then(result => {})
                        .catch(error => console.log('error', error));

                    const toptimer = setInterval(() => {
                        timwecounter--;
                        document.getElementById('topbtnweb').innerHTML = `<span class="text-3xl">Please wait ${timwecounter} seconds...</span>`;
                        if (timwecounter <= 0) {
                            clearInterval(toptimer)
                            document.getElementById('topbtnweb').innerHTML = '<span class="text-3xl">Scroll down and click <b>Continue</b> button.</span>';
                            // document.getElementById('bottombtnweb').innerHTML = '<button onclick="bottombtnone()" class="btn btn-secondary">Continue</button>';


                            const temold = JSON.parse(localStorage.getItem('_newtemp_'))
                            temold.pageid = 2;
                            localStorage.setItem("_newtemp_", JSON.stringify(temold));
                            document.getElementById('bottombtnweb').innerHTML = `<a href='https://www.cashmeasure.com/stock/stock-split-calculator' class="btn btn-secondary">Continue</a>`;
                        }
                    }, 1400);
                }
                function bottombtnone() {
                    let timwecounter = 10;
                    const toptimer = setInterval(() => {
                        timwecounter--;
                        document.getElementById('bottombtnweb').innerHTML = `Please wait ${timwecounter} seconds...`;
                        if (timwecounter <= 0) {
                            clearInterval(toptimer)
                            const temold = JSON.parse(localStorage.getItem('_newtemp_'))
                            temold.pageid = 2;
                            localStorage.setItem("_newtemp_", JSON.stringify(temold));
                            document.getElementById('bottombtnweb').innerHTML = `<a href='https://www.cashmeasure.com/stock/stock-split-calculator' class="btn btn-secondary">Continue</a>`;
                        }
                    }, 1400);
                }
                break;
            case 2:
                document.getElementById('topbtnweb').innerHTML = '<button onclick="topbtntwo()" class="btn btn-secondary">Click here to Continue</button>';
                clearInterval(2)
                function topbtntwo() {
                    let timwecounter = 10;
                    const toptimer = setInterval(() => {
                        timwecounter--;
                        document.getElementById('topbtnweb').innerHTML = `<span class="text-3xl">Please wait ${timwecounter} seconds...</span>`;
                        if (timwecounter <= 0) {
                            clearInterval(toptimer)
                            document.getElementById('topbtnweb').innerHTML = '<span class="text-3xl">Scroll down and click <b>Generate Link</b> button.</span>';
                            document.getElementById('bottombtnweb').innerHTML = '<button onclick="bottombtntwo()" class="btn btn-secondary">Generate Link »</button>';
                        }
                    }, 1400);
                }
                function bottombtntwo() {
                    let timwecounter = 10;
                    const toptimer = setInterval(() => {
                        timwecounter--;
                        document.getElementById('bottombtnweb').innerHTML = `<span class="text-2xl">Please wait ${timwecounter} seconds....</span>`;
                        
                        if (timwecounter <= 0) {
                            clearInterval(toptimer)
                            const temold = JSON.parse(localStorage.getItem('_newtemp_'))
                            temold.pageid = 3;
                            localStorage.setItem("_newtemp_", JSON.stringify(temold));
                            // document.getElementById('bottombtnweb').innerHTML = `<a class="btn btn-secondary" href='https://www.cashmeasure.com/blog/how-can-you-make-the-best-use-of-a-sip-calculator'>Continue</a>`;
                            document.getElementById('bottombtnweb').innerHTML = `<a href='${temold.url}' class="btn btn-secondary">Go to Download Link »</a>`;
                            localStorage.removeItem("_newtemp_");
                            document.cookie = '_newtemp_=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'; 
                        }
                    }, 1400);
                }
                break;
            case 3:
                document.getElementById('topbtnweb').innerHTML = '<button onclick="topbtnthree()" class="btn btn-secondary">Continue</button>';
                function topbtnthree() {
                    let timwecounter = 10;
                    const toptimer = setInterval(() => {
                        timwecounter--;
                        document.getElementById('topbtnweb').innerHTML = `Please wait ${timwecounter} seconds...`;
                        if (timwecounter <= 0) {
                            clearInterval(toptimer)
                            document.getElementById('topbtnweb').innerHTML = 'Scroll down and click Continue button.';
                            document.getElementById('bottombtnweb').innerHTML = '<button onclick="bottombtnthree()" class="btn btn-secondary">Continue</button>';
                        }
                    }, 1400);
                }
                function bottombtnthree() {
                    let timwecounter = 10;
                    const toptimer = setInterval(() => {
                        timwecounter--;
                        document.getElementById('bottombtnweb').innerHTML = `Please wait ${timwecounter} seconds...`;
                        if (timwecounter <= 0) {
                            clearInterval(toptimer)
                            const temold = JSON.parse(localStorage.getItem('_newtemp_'))
                            temold.pageid = 3;
                            localStorage.setItem("_newtemp_", JSON.stringify(temold));
                            localStorage.removeItem("_newtemp_");
                            document.cookie = '_newtemp_=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                            document.getElementById('bottombtnweb').innerHTML = `<a href='${newlocltempjson.url}' class="btn btn-secondary">Continue</a>`;
                        }
                    }, 1400);
                }
                break;
            default:
                break;
        }
    }
} catch (error) {

}