window.onresize = function () {
    console.log("偵測到螢幕寬度正在改變");
    console.log(document.body.clientWidth);
    if (document.body.clientWidth < 980) {
        console.log("md size");
        document.getElementById("maintitle").style.fontSize = "30px";
    } else {
        console.log("lg size");
        document.getElementById("maintitle").style.fontSize = "40px";
    }
}